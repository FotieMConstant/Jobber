<template>
  <div class="text--primary">
    <div class="my-0"></div>
    <v-container class="ma">
      <v-row dense>
        <v-card-title class="headline mb">My Job Applications</v-card-title>
         <router-link to="/Jobs">
        <v-btn class="ma-0" outlined x-small fab color="indigo">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
         </router-link>
        <v-col cols="12">
          <v-card>
            <!-- Laoder -->
            <span v-for="job in 3" :key="job">
              <Skeletonjobsloader v-if="showLoader" />
            </span>
            <!-- /Loader -->
            <!-- Making sure i have data in jobs -->
            <span v-if="jobs != []">
              <!-- Current user's applications -->

              <v-row dense v-for="job in jobs" :key="job" class="mb-5">
                <v-col cols="12">
                  <v-card :elevation="0">
                    <!-- Content -->
                    <v-row no-gutters>
                      <v-col cols="2">
                        <v-card :elevation="0" class="pa-2">
                          <v-avatar size="120">
                            <v-img
                              src="https://dashboard.snapcraft.io/site_media/appmedia/2020/03/app_icon_512.png"
                            />
                          </v-avatar>
                        </v-card>
                      </v-col>

                      <v-col cols="2">
                        <v-card :elevation="0" class="pa-2">
                          <v-container class="text-right font-weight-light">
                            <v-row>
                              <h2 class="title text-sm-left">
                                {{ job.offerName }}
                              </h2>
                            </v-row>
                            <v-row>
                              <span class="caption mb-4"
                                >{{ job.town }}, {{ job.country }}.</span
                              >
                            </v-row>
                            <v-row>
                              <span class="caption mb-7">
                                <v-badge
                                  color="primary"
                                  :content="job.type"
                                ></v-badge>
                              </span>
                            </v-row>
                            <v-row>
                              <span class="caption mb-1">
                                <i>
                                  <!-- Auto-update time every 60 seconds -->
                                  <timeago
                                    :datetime="job.postedDate"
                                    :auto-update="60"
                                  ></timeago>
                                </i>
                              </span>
                            </v-row>
                            <v-row>
                              <v-chip
                                v-if="job.offerStatus == true"
                                class="ma-1"
                                small
                              >
                                <v-icon left>mdi-check</v-icon>Open
                              </v-chip>
                              <v-chip
                                v-else
                                class="ma-1"
                                color="red"
                                small
                                text-color="white"
                              >
                                <v-icon left>mdi-close</v-icon>Closed
                              </v-chip>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-col>
                    </v-row>
                    <!-- / Content -->
                    <v-divider></v-divider>
                  </v-card>
                </v-col>
              </v-row>

              <!-- End of Current user's applications -->
            </span>
            <!-- End of checking if data in jobs -->
            <span v-if="jobs == null">
              <br />
              <img :src="require('../../assets/user_images/empty-list.png')" />
              <v-card-subtitle
                >Your active job applications will be listed
                here.</v-card-subtitle
              >
              <h5>
                You also have 1 inactive job applications.
                <a href="#">Click here</a> to see them.
                <br />
                <br />
                <router-link to="/Jobs">
                  <v-btn class="ma-2" outlined color="primary" rounded
                    >Search for jobs</v-btn
                  >
                </router-link>
                <br />
                <br />
              </h5>
            </span>
          </v-card>
          <br />
          <br />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Skeletonjobsloader from "./Skeletonjobsloader.vue";
import firebase from "firebase";

export default {
  components: {
    Skeletonjobsloader,
  },
  data() {
    return {
      showLoader: true,
      jobs: null,
    };
  },

  mounted: function () {
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
    // Variables for my request
    const username = "admin";
    const password = "dilan";

    // Getting the current login user
    const user = firebase.auth().currentUser;
    let jobSeekerId = user.uid;

    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );

    // this.axios
    //   .get(url, {
    //     headers: {
    //       Authorization: `Basic ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     this.jobs = response.data;
    //     console.log(response.data);
    //     console.log(typeof response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => (this.showLoader = false));

    const sendGetRequest = async () => {
      try {
        const resp = await this.axios.get(
          `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/offerseeker/jobseeker/${jobSeekerId}`,
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        );
        console.log("Data from the Async =>" + JSON.stringify(resp.data));
        this.jobs = resp.data;
        this.showLoader = false; // disabling the laoder when the data has been returned by the data
      } catch (err) {
        // Handle Error Here
        console.error("There was an error =>" + err);
      }
    };
    sendGetRequest();

    // End of request

    //  Fetch to get the actual job offer
  },
};
</script>