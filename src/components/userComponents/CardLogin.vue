<template>
  <v-card id="wrapper" class="pa-12 mx-auto pb-16" elevation="12" height="440" max-width="500">
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Sign-In</span>
      <v-avatar color="secondary lighten-2" class="subheading white--text" size="24"></v-avatar>
    </v-card-title>

    <v-form @submit.prevent="signIn" v-model="valid" :lazy-validation="lazy">
      <v-text-field class="mb-9" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <div class="text-center">
        <v-btn type="submit" class="mx-auto mt-n4" color="warning">Login</v-btn>
        <br />
        <div class="caption mt-2">OR</div>
        <button @click="googleSignIn" type="button" class="google-button mt-2">
          <span class="google-button__icon">
            <svg viewBox="0 0 366 372" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M125.9 10.2c40.2-13.9 85.3-13.6 125.3 1.1 22.2 8.2 42.5 21 59.9 37.1-5.8 6.3-12.1 12.2-18.1 18.3l-34.2 34.2c-11.3-10.8-25.1-19-40.1-23.6-17.6-5.3-36.6-6.1-54.6-2.2-21 4.5-40.5 15.5-55.6 30.9-12.2 12.3-21.4 27.5-27 43.9-20.3-15.8-40.6-31.5-61-47.3 21.5-43 60.1-76.9 105.4-92.4z"
                id="Shape"
                fill="#EA4335"
              />
              <path
                d="M20.6 102.4c20.3 15.8 40.6 31.5 61 47.3-8 23.3-8 49.2 0 72.4-20.3 15.8-40.6 31.6-60.9 47.3C1.9 232.7-3.8 189.6 4.4 149.2c3.3-16.2 8.7-32 16.2-46.8z"
                id="Shape"
                fill="#FBBC05"
              />
              <path
                d="M361.7 151.1c5.8 32.7 4.5 66.8-4.7 98.8-8.5 29.3-24.6 56.5-47.1 77.2l-59.1-45.9c19.5-13.1 33.3-34.3 37.2-57.5H186.6c.1-24.2.1-48.4.1-72.6h175z"
                id="Shape"
                fill="#4285F4"
              />
              <path
                d="M81.4 222.2c7.8 22.9 22.8 43.2 42.6 57.1 12.4 8.7 26.6 14.9 41.4 17.9 14.6 3 29.7 2.6 44.4.1 14.6-2.6 28.7-7.9 41-16.2l59.1 45.9c-21.3 19.7-48 33.1-76.2 39.6-31.2 7.1-64.2 7.3-95.2-1-24.6-6.5-47.7-18.2-67.6-34.1-20.9-16.6-38.3-38-50.4-62 20.3-15.7 40.6-31.5 60.9-47.3z"
                fill="#34A853"
              />
            </svg>
          </span>
          <span class="google-button__text">Sign in with Google</span>
        </button>
        <h6 class="my-6">Copyright 2020 Jobber</h6>
      </div>
    </v-form>

    <v-snackbar color="error" v-if="error" v-model="snackbar" :timeout="10000">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import database from "@/services/database";
export default {
  name: "CardLogin",
  data: () => ({
    return: {
      email: "",
      password: "",
      error: "",
    },

    snackbar: false,
    valid: true,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be grether than 6 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  methods: {
    async signIn() {
      let result = await database.signIn(this.email, this.password);

      // Check if the result is good or bad
      if (result.message) {
        this.error = result.message;
        this.snackbar = true;
      } else {
        // alert("User is signed-in");
        this.$router.push("/");
      }
    },
    async googleSignIn() {
      let result = await database.googleSignIn();

      // Check if the result is good or bad
      if (result.message) {
        this.error = result.message;
        this.snackbar = true;
      } else {
        // alert("User is signed-in");
        this.$router.push("/");
      }
    },

    // For verifications
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },

  computed: {},
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin-top: -16%;
}
/* google auth button CSS */
.google-button {
  height: 40px;
  border-width: 0;
  background: white;
  color: #737373;
  border-radius: 5px;
  white-space: nowrap;
  box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.05);
  transition-property: background-color, box-shadow;
  transition-duration: 150ms;
  transition-timing-function: ease-in-out;
  padding: 0;

  &:focus,
  &:hover {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #e5e5e5;
    box-shadow: none;
    transition-duration: 10ms;
  }
}

.google-button__icon {
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0 8px 8px;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
}

.google-button__icon--plus {
  width: 27px;
}

.google-button__text {
  display: inline-block;
  vertical-align: middle;
  padding: 0 24px;
  font-size: 14px;
  font-weight: bold;
  font-family: "Roboto", arial, sans-serif;
}

button ~ button {
  margin-left: 20px;
}
</style>
