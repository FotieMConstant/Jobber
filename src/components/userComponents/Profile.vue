<template>
  <div class="text--primary">
    <div class="my-0"></div>
    <!-- Break point -->

    <v-container class="mt-15">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card :elevation="6">
            <br />
            <!-- Laoder -->
            <Skeletonjobsloader v-if="showLoader" />
            <!-- /Loader -->
            <!-- Content -->
            <v-row no-gutters v-else>
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-avatar size="160" class="mt-4">
                    <v-img :src="require('../../assets/user_images/avatar-placeholder.png')" />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="7">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h2 class="title text-sm-left">Fotie Moghommahie Constant</h2>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-google-maps</v-icon>
                      <span>Yaounde, Cameroon.</span>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-email</v-icon>
                      <span>fotiemoghommahieconstant@gmail.com</span>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-phone</v-icon>
                      <span>+237652060541</span>
                    </v-row>
                    <v-row>
                      <h3 class="subtitle-1 mt-3">
                        <v-chip class="ma-1" small color="teal" text-color="white">
                          <v-avatar left>
                            <v-icon small>mdi-checkbox-marked-circle</v-icon>
                          </v-avatar>Web developer
                        </v-chip>
                        <v-chip class="ma-1" small color="teal" text-color="white">
                          <v-avatar left>
                            <v-icon small>mdi-checkbox-marked-circle</v-icon>
                          </v-avatar>Front-end developer
                        </v-chip>
                      </h3>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="text-right font-weight-light">
                    <v-row>
                      <span class="caption mb-4">
                        <router-link to="/Jobs">
                          <v-btn class="ma-2" outlined color="primary" rounded>Edit personal info</v-btn>
                        </router-link>
                      </span>
                    </v-row>
                    <v-row>
                      <span class="caption mb-7 ml-1">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <v-icon large color="primary">mdi-linkedin</v-icon>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <v-icon large color="primary">mdi-facebook</v-icon>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          <v-icon large color="primary">mdi-twitter</v-icon>
                        </a>
                      </span>
                    </v-row>
                    <v-row>
                      <span class="mb-1 ml-1">
                        <v-chip
                          href="#"
                          target="_blank"
                          class="ma-2"
                          color="cyan"
                          label
                          text-color="white"
                        >
                          <v-icon left>mdi-link-variant</v-icon>New Tweets
                        </v-chip>
                      </span>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Profile  -->
    <v-container class="mt-0">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card class="pb-10 pt-5" :elevation="2">
            <br />
            <!-- Content -->
            <v-row class="ml-5 mt-n1" no-gutters>
              <h3>Profile completeness</h3>
              <br />
              <p>Boost the attention you receive from recruiters! Strengthen your profile by adding contact info, social links, and details about your experience and education.</p>
            </v-row>
            <v-row class="ml-5 mr-5" no-gutters>
              <v-progress-linear value="10" color="success" buffer-value="100" height="25" rounded>
                <strong class="caption">10 %</strong>
              </v-progress-linear>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Skeletonjobsloader from "./Skeletonjobsloader.vue";

export default {
  components: {
    Skeletonjobsloader,
  },
  data() {
    return {
      showLoader: true,
    };
  },
  //   Called after the instance has just been mounted where el is replaced by the newly created vm.$el.
  mounted: function () {
    setTimeout(() => {
      this.showLoader = false;
    }, 300);
  },
};
</script>