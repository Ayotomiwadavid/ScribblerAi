require("dotenv").config();
const fetch = require("node-fetch");
const { db } = require("../firebaseConfig");

const gptKey = process.env.OPENIAI_API_KEY;

// A simple in-memory store for conversation histories (for demonstration purposes)
// For production, consider using a database
const conversationStore = {};

const generateOutput = async (req, res, next) => {
  const { message, conversationId } = req.body;

  const userId = req.session.user?.id; // Retrieve UID from session

  if (!uid) {
    return res.status(400).json({ error: "User ID not found in localStorage" });
  }

  if (!conversationId) {
    return res.status(400).json({ error: "Conversation ID is required" });
  }

  try {
    // Reference to the user's document in Firestore
    const userRef = db.collection("users").doc(userId);
    const conversationRef = userRef
      .collection("conversations")
      .doc(conversationId);

    // Fetch the user's conversation history or initialize if it doesn't exist
    const doc = await conversationRef.get();

    let conversationHistory = [];
    if (doc.exists) {
      conversationHistory = doc.data().history;
    } else {
      await conversationRef.set({ history: [] });
    }

    // Construct the API request to OpenAI
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${gptKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4-turbo",
        messages: [...conversationHistory, { role: "user", content: message }],
        max_tokens: 1000,
      }),
    };

    // Make the API call to OpenAI
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();

    // Update conversation history in Firestore
    const newHistory = [
      ...conversationHistory,
      { role: "user", content: message },
      { role: "assistant", content: data.choices[0].message.content },
    ];

    await conversationRef.update({ history: newHistory });

    // Return the updated conversation history in the response
    res.json({
      conversationId,
      message: data.choices[0].message,
      conversationHistory: newHistory,
    });
  } catch (error) {
    console.error("Error generating AI response:", error);
    res.status(500).json({ error: "Failed to generate AI response" });
  }
};

module.exports = { generateOutput };
