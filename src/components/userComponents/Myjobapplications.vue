<template>
  <div class="text--primary">
    <div class="my-0"></div>
    <v-container class="ma">
      <v-row dense>
        <v-card-title class="headline mb">My Job Applications</v-card-title>
        <v-btn class="ma-0" outlined x-small fab color="indigo">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-col cols="12">
          <v-card>
            <br />
            <img :src="require('../../assets/user_images/empty-list.png')" />
            <v-card-subtitle>Your active job applications will be listed here.</v-card-subtitle>
            <h5>
              You also have 1 inactive job applications.
              <a href="#">Click here</a> to see them.
              <br />
              <br />
              <router-link to="/Jobs">
              <v-btn class="ma-2" outlined color="primary" rounded>Search for jobs</v-btn>
              </router-link>
              <br />
              <br />
            </h5>
          </v-card>
          <br />
          <br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>