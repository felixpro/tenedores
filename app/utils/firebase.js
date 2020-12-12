import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBC8BnAONF-hfvH_NsWEaRkGm7JR9mmAZw",
  authDomain: "tenedores-d7b4e.firebaseapp.com",
  projectId: "tenedores-d7b4e",
  storageBucket: "tenedores-d7b4e.appspot.com",
  messagingSenderId: "14866541857",
  appId: "1:14866541857:web:ebd110f65c8223f3ca6260",
  measurementId: "G-E4CSD31H0P"
}

export const firebaseApp =  firebase.initializeApp(firebaseConfig);
