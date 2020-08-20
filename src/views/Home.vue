<template>
  <v-app>
    <Homeheader />
    <div class="my-6"></div>
    <Myjobapplications />
  </v-app>
</template>

<script>
// @ is an alias to /src
import Homeheader from "@/components/userComponents/Homeheader.vue";
import Myjobapplications from "@/components/userComponents/Myjobapplications.vue";

export default {
  name: "Home",
  components: {
    Homeheader,
    Myjobapplications,
  },
};
</script>
