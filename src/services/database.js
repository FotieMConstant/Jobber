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
    measurementId: "G-KJ6D5YKC7Y"
};

const database = firebase.initializeApp(firebaseConfig);

// SingUp function
database.signUp = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    return true;
  } catch (error) {
    return error;
  }
};

// SingIn function

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
    return true;
  } catch (error) {
    return error;
  }
};

// Google auth

database.googleSignIn = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store
    return true;
  } catch (error) {
    return error;
  }
};

export default database;
