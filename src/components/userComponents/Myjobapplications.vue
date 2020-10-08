<template>
  <div class="text--primary">
    <div class="my-0"></div>
    <v-container class="ma">
      <v-row dense>
        <v-card-title class="headline mb">My Job Applications</v-card-title>
        <router-link to="/Jobs">
          <v-btn tile color="primary">
            <v-icon left> mdi-briefcase </v-icon>
            Jobs
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
                    <br />
                    <!-- Content -->
                    <v-row no-gutters>
                      <v-col cols="2">
                        <v-card :elevation="0" class="pa-2">
                          <v-avatar size="120">
                            <v-img
                              src="https://urbanimpact.com/sites/default/files/2019-02/Papers-icon.png"
                            />
                          </v-avatar>
                        </v-card>
                      </v-col>
                      <v-col cols="8">
                        <v-card :elevation="0" class="pa-2">
                          <v-container class="lighten-5">
                            <v-row>
                              <h2 class="title text-sm-left">
                                {{ job.offerName }}
                              </h2>
                            </v-row>
                            <v-row>
                              <h3 class="subtitle-1 mt-3">
                                {{ job.description }}
                              </h3>
                            </v-row>
                            <!-- Progress of job seeker's application -->
                            <v-row>
                              <span
                                v-for="offerSeekerStatus in job.offerseekers"
                                :key="offerSeekerStatus"
                              >
                                <!-- Checking to make sure the offerSeeker id is the same as the current logged in job seeker -->
                                <span
                                  v-if="
                                    offerSeekerStatus.id.jobSeekerId ==
                                    currentUserUid
                                  "
                                >
                                  <!-- checking if the company has reviewed the user's profile -->
                                  <div
                                    v-if="
                                      offerSeekerStatus.companyReview == false
                                    "
                                  >
                                    <div class="caption ml-2">
                                      <v-badge
                                        color="red"
                                        overlap
                                        dot
                                        class="mr-2 mb-2"
                                      ></v-badge
                                      ><span>In review</span>
                                    </div>
                                  </div>
                                  <div v-else>
                                    <div class="caption ml-2">
                                      <v-badge
                                        color="primary"
                                        overlap
                                        dot
                                        class="mr-2 mb-2"
                                      ></v-badge
                                      ><span>To interview</span>
                                    </div>
                                  </div>
                                </span>
                              </span>
                            </v-row>
                            <!-- /Progress of job seeker's application -->
                            <v-row class="ml-n4 mt-2">
                              <v-chip
                                v-for="categorie in job.categories"
                                :key="categorie"
                                class="ma-1"
                                small
                                color="success"
                                text-color="white"
                              >
                                <v-avatar left>
                                  <v-icon small
                                    >mdi-checkbox-marked-circle</v-icon
                                  > </v-avatar
                                >{{ categorie.name }}
                              </v-chip>
                            </v-row>
                          </v-container>
                        </v-card>
                      </v-col>
                      <v-col cols="2">
                        <v-card :elevation="0" class="pa-2">
                          <v-container class="text-right font-weight-light">
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
                                  Posted
                                  <timeago
                                    :datetime="job.postedDate"
                                    :auto-update="60"
                                  ></timeago>
                                </i>
                              </span>
                            </v-row>
                            <v-row>
                              <v-chip
                                class="ma-1"
                                small
                                v-if="job.offerStatus == true"
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
                    <v-divider></v-divider>
                    <!-- / Content -->
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
      currentUserUid: null,
      jobs: [],
    };
  },

  mounted: function () {
    // Variables for my request
    const username = "admin";
    const password = "dilan";

    // Getting the current login user
    const user = firebase.auth().currentUser;
    let jobSeekerId = user.uid;
    this.currentUserUid = user.uid; // setting to display the current user's offerseeker status

    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );

    const sendGetRequest = async () => {
      try {
        let resp = await this.axios.get(
          `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/offerseeker/jobseeker/${jobSeekerId}`,
          {
            headers: {
              Authorization: `Basic ${token}`,
            },
          }
        );
        console.log("Data from the Async =>" + JSON.stringify(resp.data));
        resp = resp.data;
        // mapping through to get the job offer id of returned data
        let ids = resp.map((item) => {
          return item.id.jobOfferId;
        });

        ids.forEach(async (id) => {
          // Second axios call to fetch job offer
          let response = await this.axios.get(
            `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/joboffer/${id}`,
            {
              headers: {
                Authorization: `Basic ${token}`,
              },
            }
          );

          console.log("Data from the Async =>" + JSON.stringify(response.data));
          this.jobs.push(response.data);
          this.showLoader = false; // disabling the laoder when the data has been returned by the data
        });
      } catch (err) {
        // Handle Error Here
        console.error("There was an error =>" + err);
      }
    };
    sendGetRequest();

    // End of request
  },
};
</script>