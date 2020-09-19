<template>
  <v-card
    id="wrapper"
    class="pa-12 mx-auto pb-16 mb-10"
    elevation="0"
    height="auto"
    max-width="1050"
  >
    <v-layout justify-center class="mb-5 mt-n5">
      <avatar
        v-if="currentProfilePicture"
        :src="currentProfilePicture"
        :username="currentUserEmail"
        :initials="currentUserEmail"
        :size="150"
      ></avatar>
      <span v-else>
        <avatar
          v-if="profilePictureToUpload"
          :src="profilePictureToUpload"
          :username="currentUserEmail"
          :initials="currentUserEmail"
          :size="150"
          v-model="userToCreate.profilePhoto"
        ></avatar>
        <avatar
          v-else
          v-model="userToCreate.profilePhoto"
          value="https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg"
          src="https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg"
          :username="currentUserEmail"
          :initials="currentUserEmail"
          :size="190"
        ></avatar>
      </span>
    </v-layout>
    <h2 class="mb-0 font-weight-light">Welcome {{ currentUserEmail }}</h2>
    <small>Setup your jobber account. It's quick and easy!</small>
    <v-stepper v-model="e6" vertical class="mt-2">
      <v-stepper-step :complete="e6 > 1" step="1">
        Basic information
        <small>Your personal information</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="First name *"
                v-model="userToCreate.firstName"
                :rules="rules"
                hide-details="auto"
                autofocus
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Last name *"
                v-model="userToCreate.lastName"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Phone Number *"
                v-model="userToCreate.phoneNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="E-mail *"
                :value="currentUserEmail"
                disabled
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                type="date"
                label="Date of birth *"
                v-model="userToCreate.dob"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-radio-group class="ml-3">
                <v-row>
                  <span class="mr-5">Gender</span>
                  <v-radio
                    v-model="userToCreate.gender"
                    name="gender"
                    label="Male"
                    value="Male"
                  ></v-radio>
                  <v-radio
                    v-model="userToCreate.gender"
                    name="gender"
                    label="Female"
                    value="Female"
                    class="ml-5 mt-n2"
                  ></v-radio>
                </v-row>
              </v-radio-group>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Country *"
                v-model="userToCreate.country"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Town *"
                v-model="userToCreate.town"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                label="Street *"
                v-model="userToCreate.street"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="my-2">
                Pick a diplay picture
                <v-btn text small color="primary"
                  ><input @change="onFileChange" type="file"
                /></v-btn>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-layout justify-center class="mb-5 mt-n5">
                <h4 class="mb-0 font-weight-light">Preview</h4>
                <avatar
                  v-if="profilePictureToUpload"
                  :src="profilePictureToUpload"
                  :username="currentUserEmail"
                  :initials="currentUserEmail"
                  :size="150"
                  v-model="userToCreate.profilePhoto"
                ></avatar>
                <avatar
                  v-else
                  v-model="userToCreate.profilePhoto"
                  value="https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg"
                  src="https://cdn2.vectorstock.com/i/thumb-large/23/81/default-avatar-profile-icon-vector-18942381.jpg"
                  :username="currentUserEmail"
                  :initials="currentUserEmail"
                  :size="190"
                ></avatar>
              </v-layout>
            </v-col>
          </v-row>
        </div>
        <v-btn color="primary" @click="e6 = 2">next</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2"
        >Configure security for your jobber account
        <small>Secure your account with a password!</small></v-stepper-step
      >

      <v-stepper-content step="2">
        <div>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="password"
              name="input-10-1"
              label="Already set"
              hint="Password you entered when signing up for your jobber"
              persistent-hint
              counter
              disabled
            ></v-text-field>
          </v-col>
        </div>
        <v-btn color="primary" @click="e6 = 3">next</v-btn>
        <v-btn text @click="e6 = 1">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3"
        >Social media and resume setup
        <small>
          Upload your resume, setup your social and portfolio links</small
        ></v-stepper-step
      >

      <v-stepper-content step="3">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                prepend-icon="mdi-linkedin"
                label="https://www.linkedin.com/username *"
                hint="Link to your linkedin profile"
                v-model="userToCreate.linkedin"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                prepend-icon="mdi-facebook"
                label="https://www.facebook.com/username *"
                hint="Link to your facebook profile"
                v-model="userToCreate.facebook"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                prepend-icon="mdi-twitter"
                label="@username *"
                hint="Your twitter handle"
                v-model="userToCreate.twitter"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                prepend-icon="mdi-link"
                label="Website *"
                hint="Link to your website or portfolio"
                v-model="userToCreate.website"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-file-input
                accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document*"
                prepend-icon="mdi-file"
                label="Resume *"
                hint="Upload your resume,  supported format: pdf and doc"
              ></v-file-input>
            </v-col>
          </v-row>
        </div>
        <v-btn color="primary" @click="e6 = 4">next</v-btn>
        <v-btn text @click="e6 = 2">Back</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Account setup complete</v-stepper-step>
      <v-stepper-content step="4">
        <div>
          <v-row>
            <v-layout justify-center class="mb-5 mt-n5">
              <img
                src="https://thumbs.gfycat.com/QuaintLikelyFlyingfish-size_restricted.gif"
                width="200"
                height="auto"
              /> </v-layout
          ></v-row>
          <v-row>
            <v-layout justify-center class="mb-5 mt-n5">
              <h3 class="mb-0 font-weight-light">
                You are all set {{ userToCreate.firstName }}.
                <h5 class="mb-0 font-weight-light">
                  Welcome to jobber
                </h5>
              </h3>
            </v-layout>
          </v-row>
        </div>
        <v-btn color="primary" @click="createNewUser">Login</v-btn>
        <v-btn text @click="e6 = 3">back</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-card>
</template>

<script>
import firebase from "firebase";
import Avatar from "vue-avatar";
import axios from "axios";

export default {
  components: {
    Avatar,
  },
  data() {
    return {
      e6: 1, // for the steppers
      currentUserEmail: "",
      currentProfilePicture: "",
      profilePictureToUpload: null,
      userID: null,
      // User to be created
      userToCreate: {
        firstName: "",
        lastName: "",
        password: "",
        phoneNumber: null,
        linkedin: "",
        facebook: "",
        twitter: "",
        website: "",
        resume: "",
        dob: "",
        gender: "",
        profilePhoto: "",
        code: "Randome_name",
        country: "",
        town: "",
        street: "",
      },
    };
  },
  // All functions of this component
  mounted: function() {
    // Getting the current login user
    var user = firebase.auth().currentUser;
    this.currentUserEmail = user.email;
    this.currentProfilePicture = user.photoURL;
    this.userID = user.uid;
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      this.profilePictureToUpload = URL.createObjectURL(file);
    },
    createNewUser() {
      // Variables for my request
      const username = "admin";
      const password = "dilan";

      // Data to be sent to the endpoint
      const newUserDataObject = {
        id: this.userID,
        firstName: this.userToCreate.firstName,
        lastName: this.userToCreate.lastName,
        email: this.currentUserEmail, // the current user logged in email
        password: null,
        phoneNumber: this.userToCreate.phoneNumber,
        linkedin: this.userToCreate.linkedin,
        facebook: this.userToCreate.facebook,
        twitter: this.userToCreate.twitter,
        website: this.userToCreate.website,
        resume: this.userToCreate.resume,
        dob: this.userToCreate.dob,
        gender: this.userToCreate.gender,
        profilePhoto: this.userToCreate.profilePhoto,
        code: this.userToCreate.code,
        country: this.userToCreate.country,
        town: this.userToCreate.town,
        street: this.userToCreate.street,
        certificationses: [],
        offerseekers: [],
        educations: [],
        experiences: [],
        languagespokens: [],
      };
      console.log(newUserDataObject);
      const token = Buffer.from(`${username}:${password}`, "utf8").toString(
        "base64"
      );

      const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/jobseeker/`;
      console.log(url);
      axios
        .post(url, newUserDataObject, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((response) => {
          console.log("Added new user to backend successfully!");
          console.log(typeof response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.loading = false));
      // End of request
    },
  },
};
</script>

<style scoped>
#wrapper {
  margin-top: 7%;
}
</style>
