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
        <router-link to="/jobs">
          <v-btn tile color="success">
            <v-icon left> mdi-briefcase </v-icon>
            Jobs
          </v-btn>
        </router-link>
        <router-link to="/recruiter/login">
          <v-btn text large class="color-white ml-2 mr-2">Recruiter </v-btn>
        </router-link>
        <router-link to="/jobseeker/login">
          <v-btn text large class="color-white">Login</v-btn>
        </router-link>

        <router-link to="/jobseeker/signup">
          <v-btn text large class="color-white">Signup</v-btn>
        </router-link>
      </template>

      <template v-else>
        <router-link to="/jobseeker/profile">
          <v-badge
            class="mr-5"
            small
            content="9+"
            :value="messages"
            color="red"
            overlap
          >
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </router-link>
        <a @click="signOut">
          <v-btn text large class="color-white">sign-out</v-btn>
        </a>
        <span v-if="currentUserRole == 'recruiter'">
           <router-link to="/recruiter/videocall/outgoing">
          <v-btn tile color="success" class="mr-3">
            <v-icon left> mdi-video </v-icon>
            Interview
          </v-btn>
        </router-link>
          <router-link to="/recruiter/profile">
            <v-avatar>
              <img :src="photoUrl" alt="User" />
            </v-avatar>
          </router-link>
        </span>
        <span v-else>
          <router-link to="/jobseeker/profile">
            <v-avatar>
              <img :src="photoUrl" alt="User" />
            </v-avatar>
          </router-link>
        </span>
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
              <v-img :src="photoUrl"></v-img>
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
import firebase from "firebase";

export default {
  data: () => ({
    drawer: false,
    photoUrl: "", // for storing the current user's profile picture URL
  }),

  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    },

    currentUserRole() {
      return this.$store.state.currentUserRole;
    },
  },

  mounted: function () {
    // Getting the current login user
    const user = firebase.auth().currentUser;
    this.photoUrl = user.photoURL;
  },
  methods: {
    // user to singout
    async signOut() {
      await database.signOut();
      this.$router.push("/jobseeker/login");
    },
  },
};
</script>
<style scoped>
.color-white {
  color: white;
}
</style>
