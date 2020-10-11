import store from "@/store/store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVs5xBE0XUH90RYvXwm2Hg8x3TFgptTQg",
  authDomain: "jobberapp-81e85.firebaseapp.com",
  databaseURL: "https://jobberapp-81e85.firebaseio.com",
  projectId: "jobberapp-81e85",
  storageBucket: "jobberapp-81e85.appspot.com",
  messagingSenderId: "940975323976",
  appId: "1:940975323976:web:ba03cf1c97d6a841eed17d",
  measurementId: "G-KJ6D5YKC7Y",
};

const database = firebase.initializeApp(firebaseConfig);

// SingUp function for job seeker
database.signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    return true;
  } catch (error) {
    return error;
  }
};

// SingIn function for job seeker

database.signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    return true;
  } catch (error) {
    return error;
  }
};

// SingOut

database.signOut = async () => {
  try {
    await firebase.auth().signOut();
    store.commit("setCurrentUser", null); // Update the state in the store
    store.commit("setCurrentUserRole", null);
    return true;
  } catch (error) {
    return error;
  }
};

// Google auth

// // Signin with google
// database.googleSignIn = async () => {
//   try {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     await firebase.auth().signInWithPopup(provider);
//     store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
//     return true;
//   } catch (error) {
//     return error;
//   }
// };

// Singup with google for job seeker
database.googleSignUp = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    return true;
  } catch (error) {
    return error;
  }
};

// SingIn function for recruiter

database.signInRecruiter = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    store.commit("setCurrentUserRole", "recruiter");
    return true;
  } catch (error) {
    return error;
  }
};

// Singup with google for recruiter
database.googleSignUpRecruiter = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    store.commit("setCurrentUserRole", "recruiter");
    return true;
  } catch (error) {
    return error;
  }
};

// SingUp function for recruiter
database.signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    return true;
  } catch (error) {
    return error;
  }
};

export default database;
