<template>
  <v-app>
    <div id="app">
      <Appbar />
      <router-view />
    </div>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar.vue";

export default {
  components: {
    Appbar,
  },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title + " - " + "Jobber";
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7f8fc;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
a {
  text-decoration: none;
}
</style>
