<template>
  <v-app>
    <div>
      <Jobs />
    </div>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Jobs from "@/components/userComponents/Jobs.vue";

export default {
  components: {
    Jobs,
  },
};
</script>
