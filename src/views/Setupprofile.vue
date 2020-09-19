<template>
  <v-app>
    <div class="Setupprofile">
      <Profilesetup />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Profilesetup from "@/components/userComponents/Profilesetup";

export default {
  name: "Setupprofile",
  components: {
    Profilesetup,
  },
};
</script>
