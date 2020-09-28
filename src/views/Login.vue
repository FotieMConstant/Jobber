<template>
  <v-app>
    <div class="Login">
      <Header />
      <CardLogin />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import CardLogin from "@/components/userComponents/CardLogin.vue";
import Header from "@/components/userComponents/Header.vue";

export default {
  name: "Login",
  components: {
    CardLogin,
    Header,
  },
};
</script>
