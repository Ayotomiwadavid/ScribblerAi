const usermodel = require("../Models/users");
const bcrypt = require("bcrypt");
const { admin, db } = require("../firebaseConfig");
const userPlan = require("../Controllers/subscription");
const { auth, firestore } = require("firebase-admin");

const Register = async (req, res, next) => {
  const { name, email, password } = req.body;
  bcrypt.hash(password, 10, async (err, hashedPassword) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    try {
      //REGISTER NEW USER
      const userRecord = await admin.auth().createUser({
        email: email,
        password: password,
      });

      //GET USER ID FOR EASE ACCESS
      let uid = userRecord.uid;

      res.status(200).json({
        msg: "User registration successfull",
        user: userRecord,
      });

      //STORE USER DATA IN THE DATABASE
      const userRef = db.collection("users").doc(uid);
      await userRef.set({
        name: name,
        email: email,
        password: hashedPassword,
      });
    } catch (error) {
      res.status(500).json({
        msg: error.message,
      });
    }
  });
};

const Login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Missing required fields" });
  }

  try {
    // Fetch user by email
    const userRecord = await admin.auth().getUserByEmail(email);
    const uid = userRecord.uid;

    // Fetch user data from Firestore
    const userDoc = await db.collection("users").doc(uid).get();

    if (!userDoc.exists) {
      return res.status(404).json({ msg: "User data not found" });
    }

    const userData = userDoc.data();

    // Compare password
    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    // Fetching sub-collection (conversations)
    const conversationsRef = db
      .collection("users")
      .doc(uid)
      .collection("conversations");
    const conversationsSnapshot = await conversationsRef.get();

    const conversations = conversationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Combine user data with conversations to prepare for frontend
    const responseData = {
      ...userData,
      conversations: conversations,
    };

    // Save user info in session
    req.session.user = { id: uid, email: userDoc.email };

    res.status(200).json({
      msg: "Login successful",
      user: responseData,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({
      msg: error.message,
    });
  }
};

//upading user deatails in db
const updateUser = async (req, res, next) => {
  const {
    currentUserId,
    userFullName,
    userPhoneNumber,
    userCountry,
    userEmail,
    userLanguage,
  } = req.body;

  try {
    // Fetch the user document reference
    const userRef = db.collection("users").doc(currentUserId);

    // Check if the document exists
    const doc = await userRef.get();
    if (!doc.exists) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    // Prepare the updated data
    let updatedData = {
      name: userFullName,
      userPhoneNumber,
      userCountry,
      email: userEmail,
      userLanguage,
    };

    // Update the user data in Firestore
    await userRef.update(updatedData);

    if (userEmail) {
      await admin.auth().updateUser(currentUserId, {
        email: userEmail || undefined,
      });
    }

    res.status(200).json({
      msg: "User update successful",
      updatedData,
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

const passwordReset = async (req, res, next) => {
  const { userId, currentPassword, newPassword } = req.body;

  try {
    // Fetch user document from Firestore
    const userRef = db.collection("users").doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    // Verify current password
    const userData = doc.data();
    const isMatch = await bcrypt.compare(currentPassword, userData.password);
    if (!isMatch) {
      return res.status(400).json({
        msg: "Current password is incorrect",
      });
    }

    // Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // Update password in Firebase Authentication
    await admin.auth().updateUser(uid, {
      password: newPassword,
    });

    // Update password in Firestore
    await userRef.update({
      password: hashedNewPassword,
    });

    res.status(200).json({
      msg: "Password reset successful",
    });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

const fetchUserData = async (req, res, next) => {
  const userId = req.session.user?.id; // Retrieve UID from session

  if (!userId) {
    return res.status(401).json({ error: "User not authenticated" }); // Unauthorized if no UID in session
  }

  try {
    // Reference to the user document in Firestore
    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).json({ error: "User not found" });
    }

    const userData = userDoc.data();

    // Fetching sub-collection (conversations)
    const conversationsRef = userRef.collection("conversations");
    const conversationsSnapshot = await conversationsRef.get();

    const conversations = conversationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Combine user data with conversations to prepare for frontend
    const responseData = {
      userId: userId,
      ...userData,
      conversations: conversations,
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};

module.exports = { Register, Login, updateUser, passwordReset, fetchUserData };
