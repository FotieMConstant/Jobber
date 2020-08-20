<template>
  <v-app>
    <div>
      <Profile />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/userComponents/Profile.vue";

export default {
  components: {
    Profile,
  },
};
</script>
