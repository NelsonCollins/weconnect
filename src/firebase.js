import firebase from 'firebase';

const firebaseConfig = {
    apiKey:
    authDomain: "weconnect-2bb87.firebaseapp.com",
    databaseURL: "https://weconnect-2bb87.firebaseio.com",
    projectId: "weconnect-2bb87",
    storageBucket: "weconnect-2bb87.appspot.com",
    messagingSenderId: "236062553890",
    appId: "1:236062553890:web:d0917e4b0066ffdfc9d77b",
    measurementId: "G-SEV7C8LJTC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
