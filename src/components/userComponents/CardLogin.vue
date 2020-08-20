<template>
  <v-card id="wrapper" class="pa-12 mx-auto" elevation="12" height="540" max-width="500">
    <div class="text-center">
      <v-avatar size="100" class="mt-n5">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <p class="mb-2 mt-5">Welcome</p>
    </div>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field class="mb-9" v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-text-field
        class="mb-9"
        v-model="name"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>
      <v-checkbox
        :indeterminate="indeterminate"
        :error="error"
        :success="success"
        color="warning"
        label="Please accept our Terms and conditions"
      ></v-checkbox>
      <div class="text-center">
        <v-btn class="mx-auto" color="warning" @click="resetValidation">Login</v-btn>
        <h6 class="my-6">Copyright 2020 Jobber</h6>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length <= 10) || "Password must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
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
};
</script>

<style scoped>
#wrapper {
  margin-top: -17%;
}
</style>