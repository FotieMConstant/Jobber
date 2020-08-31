import store from "@/store/store";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4WDANBBjcIHv6K6kC1JjV7JoMlUlcEqs",
  authDomain: "jobberapp-9af5f.firebaseapp.com",
  databaseURL: "https://jobberapp-9af5f.firebaseio.com",
  projectId: "jobberapp-9af5f",
  storageBucket: "jobberapp-9af5f.appspot.com",
  messagingSenderId: "27228985451",
  appId: "1:27228985451:web:fbb66f0b8cbb43f191792e",
  measurementId: "G-PTTG4CNRCZ",
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

export default database;
