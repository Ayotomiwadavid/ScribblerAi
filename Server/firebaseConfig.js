var admin = require("firebase-admin");

var serviceAccount = require("./scribbler-ai0-firebase-adminsdk-veaak-178e6e2fea.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = {db, admin}
