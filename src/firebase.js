import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAsYj8he-TTlIJ1qF0A7O_GyHx4PTftvKk",
  authDomain: "netflix-clone-cabca.firebaseapp.com",
  projectId: "netflix-clone-cabca",
  storageBucket: "netflix-clone-cabca.appspot.com",
  messagingSenderId: "516804448280",
  appId: "1:516804448280:web:66ab55db9c0e7f9ecab36d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
