<template>
  <div class="text--primary">
    <div class="my-0"></div>
    <!-- Break point -->

    <v-container class="ma">
      <v-card-title class="headline mt-16">Recent Jobs</v-card-title>
      <v-toolbar dark color="primary">
        <v-toolbar-title>Search job</v-toolbar-title>
        <v-autocomplete
          v-model="select"
          :loading="loading"
          :items="items"
          :search-input.sync="search"
          cache-items
          class="mx-3"
          flat
          hide-no-data
          hide-details
          label="What job are you looking for?"
          solo-inverted
        ></v-autocomplete>
        <v-autocomplete
          cache-items
          class="mx-3"
          flat
          hide-no-data
          hide-details
          v-model="valueLocation"
          :items="itemsLocation"
          label="Location?"
          solo-inverted
        ></v-autocomplete>
        <v-autocomplete
          v-model="valueEmployment"
          :items="itemsEmployment"
          hide-no-data
          hide-details
          flat
          label="Employment type?"
          solo-inverted
        ></v-autocomplete>
        <v-btn class="ma-2" outlined color="white" rounded>Search Job</v-btn>
      </v-toolbar>
      <p class="text-left mt-5">
        <i>
          Showing
          <strong>{{ jobs.length }}</strong> out of
          <strong>277809</strong>
        </i>
      </p>
      <v-row dense v-for="job in jobs" :key="job" class="mb-5">
        <v-col cols="12">
          <v-card :elevation="12">
            <br />
            <!-- Laoder -->
            <Skeletonjobsloader v-if="showLoader" />
            <!-- /Loader -->
            <!-- Content -->
            <v-row no-gutters v-else>
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-avatar size="120">
                    <v-img
                      src="https://dashboard.snapcraft.io/site_media/appmedia/2020/03/app_icon_512.png"
                    />
                  </v-avatar>
                </v-card>
              </v-col>

              <v-dialog
                v-model="dialog[job.id]"
                fullscreen
                hide-overlay
                transition="dialog-bottom-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-col cols="8" v-bind="attrs" v-on="on">
                    <v-card :elevation="0" class="pa-2">
                      <v-container class="lighten-5">
                        <v-row>
                          <h2 class="title text-sm-left">
                            {{ job.offerName }}
                          </h2>
                        </v-row>
                        <v-row>
                          <h3 class="subtitle-1 mt-2">company</h3>
                        </v-row>
                        <v-row>
                          <h5 class="caption subtitle-1 mt-1 text-sm-left">
                            {{ job.description }}
                          </h5>
                        </v-row>
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
                </template>
                <v-card>
                  <v-toolbar dark color="primary">
                    <v-btn icon dark @click="dialog[job.id] = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Appy for Job</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>

                  <v-divider></v-divider>
                  <v-list three-line subheader>
                    <v-row class="ma-10">
                      <v-col cols="8">
                        <v-row>
                          <v-card class="mt-n3">
                            <v-avatar size="100">
                              <v-img
                                src="https://dashboard.snapcraft.io/site_media/appmedia/2020/03/app_icon_512.png"
                              />
                            </v-avatar>
                          </v-card>
                        </v-row>
                        <v-row>
                          <h2 class="title text-sm-left mt-3">
                            {{ job.offerName }}
                          </h2>
                        </v-row>
                        <v-row>
                          <h4 class="text-sm-left mt-3 font-weight-light">
                            Company
                          </h4>
                        </v-row>
                        <v-row>
                          <h5 class="text-sm-left mt-3 font-weight-light">
                            Salary: XAF {{ job.salary }}
                          </h5>
                        </v-row>
                        <v-row>
                          <h5 class="text-sm-left mt-3 font-weight-light">
                            <!-- Auto-update time every 60 seconds -->
                            Posted
                            <timeago
                              :datetime="job.postedDate"
                              :auto-update="60"
                            ></timeago>
                          </h5>
                        </v-row>

                        <v-row>
                          <span v-if="isUserLoggedIn == true">
                            <div class="mt-3" v-if="job.offerStatus == true">
                              <v-dialog v-model="dialog" width="500">
                                <template v-slot:activator="{ on, attrs }">
                                  <v-btn
                                    class="ml-n11"
                                    v-bind="attrs"
                                    v-on="on"
                                    color="primary"
                                    depressed
                                    @click="applyToOffer(job.id)"
                                    >Apply Now</v-btn
                                  >
                                  <div class="caption mt-3">
                                    You can apply for this job offer
                                  </div>
                                </template>
                                <v-card>
                                  <v-card-title class="headline grey lighten-2">
                                    Information
                                  </v-card-title>
                                  <v-avatar size="60" class="mt-3 mb-3">
                                    <v-img
                                      src="https://www.pngkit.com/png/full/776-7762350_download-transparent-check-mark-gif.png"
                                    />
                                  </v-avatar>
                                  <v-card-text>
                                    <h3>
                                      Amazing, you just postulated to this offer
                                    </h3>
                                    Your jobber profile will now be submited to
                                    the recruiter
                                  </v-card-text>

                                  <v-divider></v-divider>

                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                      color="primary"
                                      text
                                      @click="dialog = false"
                                    >
                                      Okay!
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </div>
                            <div class="mt-3" v-else>
                              <v-btn
                                class="ml-n11"
                                color="primary"
                                depressed
                                disabled
                                >Apply Now</v-btn
                              >
                              <div class="caption mt-3">
                                This job offer is closed at the moment, please
                                check back later
                              </div>
                            </div>
                          </span>
                          <span v-else class="mt-6">
                            <v-alert text dense type="warning" icon="mdi-alert">
                              Please login to Apply to this job offer!
                              <br />
                            </v-alert>
                            <router-link to="/jobseeker/login">
                              <v-btn class="" small depressed color="primary"
                                >Login</v-btn
                              >
                            </router-link>
                            OR
                            <router-link to="/jobseeker/signup">
                              <v-btn class="" small depressed color="primary"
                                >Signup!</v-btn
                              >
                            </router-link>
                          </span>
                        </v-row>
                      </v-col>
                      <v-col cols="4">
                        <v-row>
                          <h1 class="title text-sm-right mt-n6">
                            People also viewed
                          </h1>
                        </v-row>
                        <v-row class="people-also-viewed">
                          <v-card
                            absolute
                            v-for="jobsViewed in jobs"
                            :key="jobsViewed"
                            elevation="0"
                            class="mx-auto text-sm-left ml-n1"
                            max-width="344"
                          >
                            <v-list-item three-line>
                              <v-list-item-content>
                                <v-list-item-title class="headline mb-1">{{
                                  jobsViewed.offerName
                                }}</v-list-item-title>
                                <v-list-item-subtitle>{{
                                  jobsViewed.description
                                }}</v-list-item-subtitle>
                              </v-list-item-content>

                              <v-list-item-avatar tile size="80">
                                <v-avatar size="100">
                                  <v-img
                                    src="https://dashboard.snapcraft.io/site_media/appmedia/2020/03/app_icon_512.png"
                                  />
                                </v-avatar>
                              </v-list-item-avatar>
                            </v-list-item>
                            <v-divider></v-divider>
                          </v-card>
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-col cols="8">
                      <v-row>
                        <h1 class="title text-sm-left ml-10">
                          Job description
                        </h1>
                      </v-row>
                      <v-row>
                        <v-subheader class="text-sm-left mt-10 ml-7">{{
                          job.description
                        }}</v-subheader>
                      </v-row>
                    </v-col>
                    <!-- Content -->

                    <!-- / Content -->
                  </v-list>
                </v-card>
              </v-dialog>

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
                        <v-badge color="primary" :content="job.type"></v-badge>
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
                      <v-chip v-if="job.offerStatus == true" class="ma-1" small>
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
          </v-card>
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
      isUserLoggedIn: false,
      jobs: null,
      dialog: false, // Dialog for more details of the company and offer
      showLoader: true,
      loading: false,
      items: [],
      search: null,
      select: null,
      Cat: ["Front-end Developer"],
      itemsEmployment: ["Full-time", "Part-time", "Internship"], // Data for job type
      valueEmployment: null,
      itemsLocation: [
        "Yaounde",
        "Douala",
        "Bamenda",
        "Buea",
        "Bertoua",
        "Ebolowa",
        "Bafoussam",
        "Koutaba",
        "Foumban",
        "Maroua",
        "Garoua",
      ], // Data for job location
      valueLocation: null,
    };
  },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.loading = true;

      this.showLoader = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.Cat.filter((e) => {
          return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
        });
        this.loading = false;

        this.showLoader = false;
      }, 900);
    },
    applyToOffer(jobOfferId) {
      // Getting the current login user
      const user = firebase.auth().currentUser;
      let jobSeekerId = user.uid;

      console.log("You are applying to a job offer with id: " + jobOfferId);
      console.log("Your jobSeekerId: " + jobSeekerId);

      // data object for offerseeker
      const offerSeekerDataObject = {
        id: {
          jobSeekerId: jobSeekerId,
          jobOfferId: jobOfferId,
        },
        companyReview: false,
        seekerReview: true,
        interviewDate: null,
      };
      // Variables for my request
      const username = "admin";
      const password = "dilan";

      const token = Buffer.from(`${username}:${password}`, "utf8").toString(
        "base64"
      );

      const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/offerseeker/`;

      // Posting the data to backend
      this.axios
        .post(url, offerSeekerDataObject, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((response) => {
          this.userProfile = response.data;
          console.log(response.data);
          console.log(typeof response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.showLoader = false));
      // End of request
    },
  },
  //   Called after the instance has just been mounted where el is replaced by the newly created vm.$el.
  mounted: function () {
    setTimeout(() => {
      this.showLoader = false;
    }, 5000);
    // Getting the current login user
    const user = firebase.auth().currentUser;

    // Making sure we have a user before we use user's ID
    if (user) {
      let jobSeekerId = user.uid;
      if (jobSeekerId != null && jobSeekerId != "") {
        this.isUserLoggedIn = true;
      }
    }
    console.log("Is user logged in? " + this.isUserLoggedIn);

    // Variables for my request
    const username = "admin";
    const password = "dilan";

    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );

    const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/joboffer/`;

    this.axios
      .get(url, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((response) => {
        this.jobs = response.data;
        console.log(response.data);
        console.log(typeof response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.showLoader = false));
    // End of request
  },
};
</script>

<style lang="scss" scoped>
.people-also-viewed {
  height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  position: relative;
}
.people-also-viewed::-webkit-scrollbar-track {
  background-color: #f5f5f5;
}
.people-also-viewed::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.people-also-viewed::-webkit-scrollbar-thumb {
  background-color: #0ae;

  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    color-stop(0.5, rgba(255, 255, 255, 0.2)),
    color-stop(0.5, transparent),
    to(transparent)
  );
}
</style>