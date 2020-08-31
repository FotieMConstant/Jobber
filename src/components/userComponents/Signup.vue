<template>
  <v-card
    id="wrapper"
    class="pa-12 mx-auto"
    elevation="12"
    height="440"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Sign-up</span>
      <v-avatar
        color="secondary lighten-2"
        class="subheading white--text"
        size="24"
      ></v-avatar>
    </v-card-title>

    <v-form @submit.prevent="signUp" v-model="valid" :lazy-validation="lazy">
      <v-text-field
        class="mb-9"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

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
        <v-btn
          type="submit"
          class="mx-auto"
          color="warning"
          @submit.prevent="signUp"
          >Let's do this</v-btn
        >
        <h6 class="my-6">Copyright 2020 Jobber</h6>
      </div>
    </v-form>

    <v-snackbar color="error" v-if="error" v-model="snackbar" :timeout="10000">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>

<script>
import database from "@/services/database";
export default {
  name: "Signup",
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
    async signUp() {
      let result = await database.signUp(this.email, this.password);

      // Check if the result is good or bad
      if (result.message) {
        this.error = result.message;
        this.snackbar = true;
      } else {
        // alert("User created!");
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

<style scoped>
#wrapper {
  margin-top: -16%;
}
</style>
