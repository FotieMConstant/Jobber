<template>
  <v-app>
    <div class="Login">
      <Header />
      <Login />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/rectruiterComponents/Login.vue";
import Header from "@/components/rectruiterComponents/Header.vue";

export default {
  name: "RecruiterLogin",
  components: {
    Login,
    Header,
  },
};
</script>
