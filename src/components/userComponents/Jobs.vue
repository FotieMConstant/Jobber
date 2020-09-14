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
          <strong>{{jobs.length}}</strong> out of
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
                          <h2 class="title text-sm-left">{{ job.offerName }}</h2>
                        </v-row>
                        <v-row>
                          <h3 class="subtitle-1 mt-2">company</h3>
                        </v-row>
                        <v-row>
                          <h5 class="caption subtitle-1 mt-1">{{ job.description }}</h5>
                        </v-row>
                        <v-row class="ml-n4 mt-2">
                          <v-chip
                            v-for="categorie in 3"
                            :key="categorie"
                            class="ma-1"
                            small
                            color="success"
                            text-color="white"
                          >
                            <v-avatar left>
                              <v-icon small>mdi-checkbox-marked-circle</v-icon>
                            </v-avatar>categorie name
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
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                      <v-btn dark text @click="dialog[job.id] = false">Save</v-btn>
                    </v-toolbar-items>
                  </v-toolbar>

                  <v-divider></v-divider>
                  <v-list three-line subheader>
                    <v-subheader>General</v-subheader>
                    <!-- Content -->
                    Content here! ID = {{job.id}}
                    <!-- / Content -->
                  </v-list>
                </v-card>
              </v-dialog>

              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="text-right font-weight-light">
                    <v-row>
                      <span class="caption mb-4">{{ job.town }}, {{ job.country }}.</span>
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
                          <timeago :datetime="job.postedDate" :auto-update="60"></timeago>
                        </i>
                      </span>
                    </v-row>
                    <v-row>
                      <v-chip v-if="job.offerStatus == true" class="ma-1" small>
                        <v-icon left>mdi-check</v-icon>Open
                      </v-chip>
                      <v-chip v-else class="ma-1" color="red" small text-color="white">
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
export default {
  components: {
    Skeletonjobsloader,
  },
  data() {
    return {
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
  },
  //   Called after the instance has just been mounted where el is replaced by the newly created vm.$el.
  mounted: function () {
    setTimeout(() => {
      this.showLoader = false;
    }, 500);

    this.axios
      .get("http://localhost:8080/endpoints/joboffer.json")
      .then((response) => {
        // Seeting the response to the jobs variable
        this.jobs = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  },
};
</script>
