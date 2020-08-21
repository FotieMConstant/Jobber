<template>
  <span>
    <v-app-bar color="primary" dark fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/">
        <v-toolbar-title class="color-white ml-1">
          <v-img :src="require('../assets/logo.png')" />
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/Login">
        <v-btn text large class="color-white">Login</v-btn>
      </router-link>

      <router-link to="/Signup">
        <v-btn text large class="color-white">Signup</v-btn>
      </router-link>

      <router-link to="/Userprofile">
        <v-avatar>
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </router-link>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
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
  </span>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
<style scoped>
.color-white {
  color: white;
}
</style>
