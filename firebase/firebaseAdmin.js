const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json');


const serviceAccountJSON = Buffer.from(
  process.env.FIREBASE_SERVICE_ACCOUNT,
  'base64'
).toString('utf8');

const serviceAccount = JSON.parse(serviceAccountJSON);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
