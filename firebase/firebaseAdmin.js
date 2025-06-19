const admin = require('firebase-admin');
require('dotenv').config();

const serviceAccountJSON = Buffer.from(
  process.env.FIREBASE_SERVICE_ACCOUNT,
  'base64'
).toString('utf8');

const serviceAccount = JSON.parse(serviceAccountJSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
