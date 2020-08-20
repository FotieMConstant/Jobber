<template>
  <v-skeleton-loader
    ref="skeleton"
    :boilerplate="boilerplate"
    :type="type"
    :tile="tile"
    class="mx-auto"
    height="150"
  ></v-skeleton-loader>
</template>

<script>
export default {
  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: ["theme"],

  data: () => ({
    boilerplate: false,
    tile: false,
    type: "list-item-avatar-three-line",
    types: [],
  }),

  mounted() {
    this.types = Object.keys(this.$refs.skeleton.rootTypes);
  },
};
</script>