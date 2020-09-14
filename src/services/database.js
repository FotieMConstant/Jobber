import store from "@/store/store";
import firebase from "firebase";
import axios from "axios";

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

// Singup with google
database.googleSignUp = async () => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    store.commit("setCurrentUser", firebase.auth().currentUser); // Update the state in the store

    // Getting the current login user
    var user = firebase.auth().currentUser;
    console.log("user UID: " + user.uid);

    // API request to create a user in the database
    // Variables for my request
    const username = "admin";
    const password = "dilan";

    // Data to be sent to the endpoint
    const data = {
      id: user.uid,
      firstName: user.displayName,
      lastName: null,
      email: user.email,
      password: null,
      phoneNumber: 645920145,
      linkedin: "link",
      facebook: "link",
      twitter: "link",
      website: "https://haibasoft.com",
      resume: "some history about you",
      dob: "2020-09-08T00:00:00.000+00:00",
      gender: "male",
      profilePhoto: user.photoURL,
      code: "cd45",
      country: "cameroon",
      town: "bamenda",
      street: "down town",
      certificationses: [],
      offerseekers: [],
      educations: [],
      experiences: [],
      languagespokens: [],
    };
    console.log(data);
    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );

    const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/jobseeker/`;
    console.log(url);
    axios
      .post(url, data, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((response) => {
        console.log("user sent to backend successfully!");
        console.log(typeof response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
    // End of request

    return true;
  } catch (error) {
    return error;
  }
};
export default database;
