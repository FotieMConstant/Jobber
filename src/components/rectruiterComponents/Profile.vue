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
                    <v-img
                      :src="
                        require('../../assets/user_images/avatar-placeholder.png')
                      "
                    />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="7">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h2 class="title text-sm-left">{{userProfile.firstName}} {{userProfile.lastName}}</h2>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-home-circle</v-icon>
                      <span>Haibasoft</span>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-email</v-icon>
                      <span>{{userProfile.email}}</span>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-phone</v-icon>
                      <span>+(237){{userProfile.tel}}</span>
                    </v-row>
                    <v-row>
                      <h3 class="subtitle-1 mt-3 text-left">
                        <span class="caption"
                          >Software Engineering services company!</span
                        >
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
                        <!-- Edit personal info -->
                        <v-dialog
                          v-model="dialogEdit"
                          fullscreen
                          hide-overlay
                          transition="dialog-bottom-transition"
                        >
                          <!-- / Edit personal info -->
                          <template v-slot:activator="{ on, attrsEdit }">
                            <v-btn
                              v-bind="attrsEdit"
                              v-on="on"
                              class="ma-2"
                              outlined
                              color="primary"
                              rounded
                              >Edit personal info</v-btn
                            >
                          </template>
                          <v-card>
                            <!-- Toolbar -->
                            <v-toolbar dark color="primary">
                              <v-btn icon dark @click="dialogEdit = false">
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                              <v-toolbar-title>Settings</v-toolbar-title>
                              <v-spacer></v-spacer>
                              <v-toolbar-items>
                                <v-btn dark text @click="dialogEdit = false"
                                  >Save</v-btn
                                >
                              </v-toolbar-items>
                            </v-toolbar>
                            <!-- / Toolbar -->

                            <!-- Content -->
                            <v-row>
                              <v-col cols="2">
                                <v-card :elevation="0" class="pa-2">
                                  <v-file-input
                                    :rules="rules"
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick a picture"
                                    prepend-icon="mdi-camera"
                                    label="Avatar"
                                    hide-input
                                    class="ml-16"
                                  ></v-file-input>
                                  <v-avatar size="160" class="mt-4">
                                    <v-img
                                      :src="
                                        require('../../assets/user_images/avatar-placeholder.png')
                                      "
                                    />
                                  </v-avatar>
                                </v-card>
                              </v-col>
                              <v-col cols="7">
                                <v-card :elevation="0" class="pa-2">
                                  <v-container class="lighten-5">
                                    <v-row>
                                      <v-text-field
                                        class="title text-sm-left"
                                        value="Fotie Moghommahie"
                                        label="First name *"
                                      ></v-text-field>

                                      <v-text-field
                                        class="title text-sm-left ml-4"
                                        value="Constant"
                                        label="Last name *"
                                      ></v-text-field>
                                    </v-row>
                                    <v-row class="ml-n10">
                                      <v-col>
                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          value="Yaounde, Cameroon"
                                          label="Location *"
                                        ></v-text-field>
                                      </v-col>
                                      <v-col>
                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          value="fotiemoghommahieconstant@gmail.com"
                                          label="E-Mail *"
                                        ></v-text-field>
                                      </v-col>
                                      <v-col>
                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          value="+237652060541"
                                          label="Tel *"
                                        ></v-text-field>
                                      </v-col>
                                    </v-row>
                                    <v-row>
                                      <h3 class="subtitle-1 mt-3">
                                        <v-chip
                                          class="ma-1"
                                          small
                                          color="teal"
                                          text-color="white"
                                        >
                                          <v-avatar left>
                                            <v-icon small
                                              >mdi-checkbox-marked-circle</v-icon
                                            > </v-avatar
                                          >Web developer
                                        </v-chip>
                                        <v-chip
                                          class="ma-1"
                                          small
                                          color="teal"
                                          text-color="white"
                                        >
                                          <v-avatar left>
                                            <v-icon small
                                              >mdi-checkbox-marked-circle</v-icon
                                            > </v-avatar
                                          >Front-end developer
                                        </v-chip>
                                      </h3>
                                    </v-row>
                                  </v-container>
                                </v-card>
                              </v-col>
                            </v-row>

                            <!-- Password -->
                            <v-row no-gutters>
                              <v-col cols="2">
                                <v-card :elevation="0" class="pa-2">
                                  <v-avatar class="mt-4">
                                    <v-img
                                      :src="
                                        require('../../assets/user_images/experience-default.png')
                                      "
                                    />
                                  </v-avatar>
                                </v-card>
                              </v-col>
                              <v-col cols="8">
                                <v-card :elevation="0" class="pa-2">
                                  <v-container class="lighten-5">
                                    <v-row>
                                      <h2 class="text-lg-left">Security</h2>
                                    </v-row>
                                    <v-row class="text-sm-left mt-2">
                                      <v-row>
                                        <v-text-field
                                          class="title text-sm-left"
                                          label="Current password *"
                                        ></v-text-field>

                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          label="New password *"
                                        ></v-text-field>
                                      </v-row>
                                    </v-row>
                                  </v-container>
                                </v-card>
                              </v-col>
                            </v-row>
                            <!-- / Password -->

                            <!-- Social links -->
                            <v-row no-gutters>
                              <v-col cols="2">
                                <v-card :elevation="0" class="pa-2">
                                  <v-avatar class="mt-4">
                                    <v-img
                                      :src="
                                        require('../../assets/user_images/experience-default.png')
                                      "
                                    />
                                  </v-avatar>
                                </v-card>
                              </v-col>
                              <v-col cols="8">
                                <v-card :elevation="0" class="pa-2">
                                  <v-container class="lighten-5">
                                    <v-row>
                                      <h2 class="text-lg-left">Social links</h2>
                                    </v-row>
                                    <v-row class="text-sm-left mt-2">
                                      <v-row>
                                        <v-text-field
                                          class="title text-sm-left"
                                          label="Linkedin URL *"
                                        ></v-text-field>

                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          label="Facebook URL *"
                                        ></v-text-field>

                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          label="Twitter @username *"
                                        ></v-text-field>

                                        <v-text-field
                                          class="title text-sm-left"
                                          label="Website *"
                                        ></v-text-field>

                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          label="Date of birth *"
                                          type="date"
                                        ></v-text-field>

                                        <v-text-field
                                          class="title text-sm-left ml-4"
                                          label="Gender *"
                                        ></v-text-field>
                                      </v-row>
                                    </v-row>
                                  </v-container>
                                </v-card>
                              </v-col>
                            </v-row>
                            <!-- / Social links -->

                            <!-- / Content -->
                          </v-card>
                        </v-dialog>
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

    <!-- Profile completeness  -->
    <v-container class="mt-0">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card class="pb-10 pt-5" :elevation="2">
            <br />
            <!-- Content -->
            <v-row class="ml-5 mt-n1" no-gutters>
              <h3>Profile completeness</h3>
              <br />
              <p>
                Boost the attention you receive from recruiters! Strengthen your
                profile by adding contact info, social links, and details about
                your experience and education.
              </p>
            </v-row>
            <v-row class="ml-5 mr-5" no-gutters>
              <v-progress-linear
                value="10"
                color="success"
                buffer-value="100"
                height="25"
                rounded
              >
                <strong class="caption">10 %</strong>
              </v-progress-linear>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ Profile  -->

    <!-- Job Offers  -->
    <v-container class="mt-n6">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card :elevation="2">
            <v-row class="ml-5" no-gutters>
              <h3 class="mt-5">Created Offers</h3>
              <br />
              <v-row>
                <!-- Dialog for adding new experiences -->

                <v-dialog v-model="dialog" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <span class="ml-7 mb-1 mt-4">
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        class="ma-0"
                        outlined
                        x-small
                        fab
                        color="indigo"
                      >
                        <v-icon>mdi-pencil</v-icon>
                      </v-btn>
                    </span>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Post a job offer</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form>
                          <v-row>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Title *"
                                autofocus
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Company *"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Tel *"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Email *"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="Location *"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-textarea
                                label="Description *"
                                type="text"
                                required
                              ></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                type="date"
                                label="From *"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                type="date"
                                label="To *"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-checkbox
                                v-model="checkbox"
                                :label="`I currently work here: ${checkbox.toString()}`"
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>* indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false"
                        >Close</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="dialog = false"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!--/ Dialog for adding new experiences -->
              </v-row>
            </v-row>
            <br />
            <!-- Laoder -->
            <Skeletonjobsloader v-if="showLoader" />
            <!-- /Loader -->
            <!-- Content -->
            <v-row v-for="joboffer in userProfile.joboffers" :key="joboffer" no-gutters v-else>
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-avatar class="mt-4">
                    <v-img
                      :src="
                        require('../../assets/user_images/hiring-default.png')
                      "
                    />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h4 class="text-sm-left">
                        {{joboffer.offerName}}
                      </h4>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">
                        <span class="ml-0">2019 - 2020</span>
                      </span>
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <span>
                        {{joboffer.description}}
                      </span>
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <v-chip
                        color="yellow"
                      >
                        <span v-if="joboffer.offerseekers.length == 1">
                          {{joboffer.offerseekers.length}} Application recieved!
                        </span>
                         <span v-else-if="joboffer.offerseekers.length == 0">No Application received!</span>
                        <span v-else> {{joboffer.offerseekers.length}} Applications recieved!</span>
                      </v-chip>
                      <v-dialog
                        v-model="dialogViewDetails[joboffer.id]"
                        persistent
                        max-width="600px"
                      >
                      <template v-slot:activator="{ on, attrs }">
                      <v-btn rounded color="primary" fab x-small dark class="ml-2"  v-bind="attrs" v-on="on"><v-icon>mdi-file-document</v-icon> </v-btn>
                      </template>
                        <v-card>
                          <v-card-title>
                            <span class="headline">Applications recieved for {{joboffer.offerName}}</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                               <!-- Content -->
                               <v-list three-line>
                                 <span v-for="user in joboffer.offerseekers.length" :key="user">
                                
                                
                                  <v-divider></v-divider>
    
                                  <v-list-item>
                                    <v-list-item-avatar>
                                      <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                                    </v-list-item-avatar>
                          
                                    <v-list-item-content>
                                      <v-list-item-title class="mt-n2 text-left">Fotie M. Contant</v-list-item-title>
                                      <v-list-item-subtitle class="mt-n5 text-left">Yaounde Cameroon</v-list-item-subtitle>
                                    </v-list-item-content>
                                  </v-list-item>
                                </span>
                              </v-list>
                               
                               <!-- / Content -->
                              </v-row>
                            </v-container>
                            <small>Here are all the job seekers who applied for the {{joboffer.offerName}} job offer</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialogViewDetails[joboffer.id] = false"
                            >
                              Close
                            </v-btn>
                            
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="text-right font-weight-light">
                    <v-row>
                      <span class="mb-7 ml-16">
                        <v-icon>mdi-dots-horizontal</v-icon>
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
    <!--/ Job Offers  -->
  </div>
</template>

<script>
import Skeletonjobsloader from "../userComponents/Skeletonjobsloader.vue";
import firebase from "firebase";

export default {
  components: {
    Skeletonjobsloader,
  },
  data() {
    return {
      userProfile : null, // to store recruiter's profile data
      showLoader: true,
      dialogViewDetails: {}, // for the modal of view applicants
      dialog: false, // data for the dialog box of Experience
      checkbox: true, //For the checkbox of currently work here
      dialogEdit: false,
      notifications: false,
      sound: true,
      widgets: false,
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Sorry, profile size should be less than 2 MB!",
      ],
    };
  },
  //   Called after the instance has just been mounted where el is replaced by the newly created vm.$el.
  mounted: function () {
    setTimeout(() => {
      this.showLoader = false;
    }, 300);

    // Variables for my request
    const username = "admin";
    const password = "dilan";

    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );

    // Getting the current login user
    const user = firebase.auth().currentUser;
    this.photoUrl = user.photoURL;

    const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/recruiter/4s518`;

    this.axios
      .get(url, {
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
};
</script>
