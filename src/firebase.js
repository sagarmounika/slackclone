import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt70pRNOxa8z3GpwRLM1KbAOYniDcQEeU",
  authDomain: "slack-clone-2ddb0.firebaseapp.com",
  projectId: "slack-clone-2ddb0",
  storageBucket: "slack-clone-2ddb0.appspot.com",
  messagingSenderId: "839779402808",
  appId: "1:839779402808:web:06ae6614c2b8751b9892cd",
  measurementId: "G-JQYY1QGG6T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
