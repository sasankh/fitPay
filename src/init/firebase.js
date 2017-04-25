const firebase = require("firebase");

const credFirebase = require("../config/config").firebase.credential;

const credential = {
  apiKey: credFirebase.apiKey,
  authDomain: credFirebase.authDomain,
  databaseURL: credFirebase.databaseURL,
  projectId: credFirebase.projectId,
  storageBucket: credFirebase.storageBucket,
  messagingSenderId: credFirebase.messagingSenderId
};

firebase.initializeApp(credential);

function getFirebaseConnection() {
  if(!firebase) {
    firebase.initializeApp(credential);
  }

  return firebase;
}

module.exports.getConnection = getFirebaseConnection;
