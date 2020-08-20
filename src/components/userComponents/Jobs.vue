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
          <strong>20</strong> out of
          <strong>277809</strong>
        </i>
      </p>
      <v-row dense v-for="jobs in 20" :key="jobs" class="mb-5">
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
                  <v-avatar size="100">
                    <v-img
                      src="https://img.icons8.com/bubbles/2x/company.png"
                    />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h2
                        class="title text-sm-left"
                      >Hardware Related Software Engineer /ABS/ESP 软件工程师（硬件接口相关）_Software Center</h2>
                    </v-row>
                    <v-row>
                      <h3 class="subtitle-1 mt-3">Bosch Group</h3>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="text-right font-weight-light">
                    <v-row>
                      <span class="caption mb-4">Chengdu, China.</span>
                    </v-row>
                    <v-row>
                      <span class="caption mb-7">
                        <v-badge color="primary" content="Full time"></v-badge>
                      </span>
                    </v-row>
                    <v-row>
                      <span class="caption mb-1">
                        <i>Just now</i>
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
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        "Front-end Developer",
        "HR Manager",
        "School teacher",
        "University Lecturer",
        "Graphic Designer",
        "Content creator",
        "Web master",
        "Java Developer",
        "CCNA Certified specialist",
        "Data Analyst",
        "Back-end Developer",
      ],
      location: [
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
      ],
      itemsEmployment: ["Full-time", "Part-time", "Internship"],
      valueEmployment: null,
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
        this.items = this.states.filter((e) => {
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
    }, 250);
  },
};
</script>