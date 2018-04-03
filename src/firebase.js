import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDX8F8XJj1zergHOD2_NdayiW75NKfCqwk",
  authDomain: "accenturebank.firebaseapp.com",
  databaseURL: "https://accenturebank.firebaseio.com",
  projectId: "accenturebank",
  storageBucket: "accenturebank.appspot.com",
  messagingSenderId: "693955348629"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const providerFace = new firebase.auth.FacebookAuthProvider();
export default firebase;