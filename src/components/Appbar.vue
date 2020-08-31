<template>
  <span>
    <v-app-bar color="primary" dark fixed>
      <template v-if="currentUser">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      </template>
      <router-link to="/">
        <v-toolbar-title class="color-white ml-1">
          <v-img :src="require('../assets/logo.png')" />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <template v-if="!currentUser">
        <router-link to="/Login">
          <v-btn text large class="color-white">Login</v-btn>
        </router-link>

        <router-link to="/Signup">
          <v-btn text large class="color-white">Signup</v-btn>
        </router-link>
      </template>

      <template v-else>
        <a @click="signOut">
          <v-btn text large class="color-white">sign-out</v-btn></a
        >

        <router-link to="/Userprofile">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="User" />
          </v-avatar>
        </router-link>
      </template>
    </v-app-bar>

    <template v-if="currentUser">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ currentUser.email }}</v-list-item-title>
            </v-list-item-content>

            <v-divider></v-divider>

            <v-list dense>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </template>
  </span>
</template>

<script>
import database from "@/services/database";
export default {
  data: () => ({
    drawer: false,
  }),

  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },
  },

  methods: {
    // user to singout
    async signOut() {
      await database.signOut();
      this.$router.push("/Login");
    },
  },
};
</script>
<style scoped>
.color-white {
  color: white;
}
</style>
