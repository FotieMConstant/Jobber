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
                      v-if="photoUrl == null"
                      :src="
                        require('../../assets/user_images/avatar-placeholder.png')
                      "
                    />
                    <avatar
                      v-else
                      :src="photoUrl"
                      :username="userProfile.firstName"
                      :initials="userProfile.firstName"
                      :size="150"
                    ></avatar>
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="7">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h2
                        class="title text-sm-left"
                      >{{ userProfile.firstName }} {{ userProfile.lastName }}</h2>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-google-maps</v-icon>
                      <span>
                        {{ userProfile.street }}, {{ userProfile.town }},
                        {{ userProfile.country }}, .
                      </span>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-email</v-icon>
                      <span>{{ userProfile.email }}</span>
                    </v-row>
                    <v-row class="mt-2">
                      <v-icon class="ml-n1 mr-2">mdi-phone</v-icon>
                      <span>{{ userProfile.phoneNumber }}</span>
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
                            >Edit personal info</v-btn>
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
                                <v-btn dark text @click="dialogEdit = false">Save</v-btn>
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
                                      v-if="photoUrl == null"
                                      :src="
                                        require('../../assets/user_images/avatar-placeholder.png')
                                      "
                                    />
                                    <avatar
                                      v-else
                                      :src="photoUrl"
                                      :username="userProfile.firstName"
                                      :initials="userProfile.firstName"
                                      :size="150"
                                    ></avatar>
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

                                        <v-text-field class="title text-sm-left" label="Website *"></v-text-field>

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
                    <v-row>
                      <span class="caption mb-7 ml-1">
                        <a
                          :href="'//' + userProfile.linkedin"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <v-icon large color="primary">mdi-linkedin</v-icon>
                        </a>
                        <a
                          :href="'//' + userProfile.facebook"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <v-icon large color="primary">mdi-facebook</v-icon>
                        </a>
                        <a
                          :href="'//' + userProfile.twitter"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <v-icon large color="primary">mdi-twitter</v-icon>
                        </a>
                      </span>
                    </v-row>
                    <v-row>
                      <span class="mb-1 ml-1">
                        <v-chip
                          :href="'//' + userProfile.website"
                          target="_blank"
                          class="ma-2"
                          color="cyan"
                          label
                          text-color="white"
                        >
                          <v-icon left>mdi-link-variant</v-icon>Website
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
              <v-progress-linear value="10" color="success" buffer-value="100" height="25" rounded>
                <strong class="caption">10 %</strong>
              </v-progress-linear>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ Profile  -->

    <!-- Experience  -->
    <v-container class="mt-n6">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card :elevation="2">
            <v-row class="ml-5" no-gutters>
              <h3 class="mt-5">Experience</h3>
              <br />
              <v-row>
                <!-- Dialog for adding new experiences -->

                <v-dialog v-model="dialogExp" persistent max-width="600px">
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
                      <span class="headline">Add Experience</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form>
                          <v-row>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Title *"
                                v-model="experience.title"
                                autofocus
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Company *" v-model="experience.company" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Tel *" v-model="experience.tel" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Email *" v-model="experience.email" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Location *"
                                v-model="experience.location"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Country *" v-model="experience.country" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Town *" v-model="experience.town" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Street *" v-model="experience.street" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-textarea
                                label="Description *"
                                type="text"
                                v-model="experience.description"
                                required
                              ></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field
                                type="date"
                                label="From *"
                                v-model="experience.startDate"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" v-if="checkbox == true">
                              <v-text-field type="date" label="You currently work here *" disabled></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" v-else>
                              <v-text-field
                                type="date"
                                label="To *"
                                v-model="experience.endDate"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col>
                              <v-checkbox
                                v-model="checkbox"
                                :label="
                                  `I currently work here: ${checkbox.toString()}`
                                "
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>* indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialogExp = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="createExperience">Save</v-btn>
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
            <v-row
              v-for="experience in userProfile.experiences"
              :key="experience"
              no-gutters
              v-else
            >
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
                <v-card :elevation="0" class="pa-2 mt-n6">
                  <v-container class="lighten-5">
                    <v-row>
                      <h4 class="text-sm-left">{{ experience.title }}</h4>
                    </v-row>
                    <v-row>
                      <small>
                        <span class="mt-5">
                          Started
                          <timeago :datetime="experience.startDate" :auto-update="60"></timeago> -
                          <span v-if="experience.endDate == null">
                            You still work here
                          </span>
                          <span v-else>
                             <timeago :datetime="experience.endDate" :auto-update="60"></timeago>
                          </span>
                        </span>
                      </small>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">
                        {{ experience.company }}, E-mail:
                        {{ experience.email }}, Tel: {{ experience.tel }}
                      </span>
                    </v-row>
                    <v-row class="mt-2">
                      {{ experience.town }}, {{ experience.country }} ({{
                      experience.street
                      }}).
                    </v-row>
                    <v-row class="mt-2 mb-2">
                      <v-divider></v-divider>
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <small>{{ experience.description }}</small>
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
              <v-divider style="z-index: 4;"></v-divider>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ Experience  -->

    <!-- Education  -->
    <v-container class="mt-n6">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card :elevation="2">
            <v-row class="ml-5" no-gutters>
              <h3 class="mt-5">Education</h3>
              <br />
              <v-row>
                <!-- Dialog for adding new Education -->

                <v-dialog v-model="dialogEdu" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrsEdu }">
                    <span class="ml-7 mb-1 mt-4">
                      <v-btn
                        v-bind="attrsEdu"
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
                      <span class="headline">Add Education</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form>
                          <v-row>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Institution *" autofocus required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Major *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Degree *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Country *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Town *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Street *" required></v-text-field>
                            </v-col>

                            <v-col cols="12">
                              <v-textarea label="Description *" type="text" required></v-textarea>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field type="date" label="From *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                              <v-text-field type="date" label="To *" required></v-text-field>
                            </v-col>
                            <v-col>
                              <v-checkbox
                                v-model="checkbox"
                                :label="
                                  `I currently attend: ${checkbox.toString()}`
                                "
                              ></v-checkbox>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>* indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialogEdu = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="dialogEdu = false">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!--/ Dialog for adding new Education -->
              </v-row>
            </v-row>
            <br />
            <!-- Laoder -->
            <Skeletonjobsloader v-if="showLoader" />
            <!-- /Loader -->
            <!-- Content -->
            <v-row v-for="education in userProfile.educations" :key="education" no-gutters v-else>
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-avatar class="mt-4">
                    <v-img
                      :src="
                        require('../../assets/user_images/education-default.png')
                      "
                    />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h4 class="text-sm-left">{{ education.institution }}</h4>
                      <span class="ml-2">
                        {{ education.startDate }} -
                        {{ education.endDate }}
                      </span>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">
                        {{
                        education.major
                        }}
                      </span>
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <span>{{ education.degree }}</span>
                    </v-row>
                    <v-row>
                      {{ education.town }}, {{ education.country }} ({{
                      education.street
                      }}).
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <span>{{ education.description }}</span>
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
              <v-divider style="z-index: 4;"></v-divider>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ Education  -->

    <!-- Certification  -->
    <v-container class="mt-n6">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card :elevation="2">
            <v-row class="ml-5" no-gutters>
              <h3 class="mt-5">Certification</h3>
              <br />
              <v-row>
                <!-- Dialog for adding new Education -->

                <v-dialog v-model="dialogCertif" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrsCertif }">
                    <span class="ml-7 mb-1 mt-4">
                      <v-btn
                        v-bind="attrsCertif"
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
                      <span class="headline">Add Certification</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form>
                          <v-row>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Name *"
                                autofocus
                                required
                                v-model="certification.name"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Organisation *"
                                required
                                v-model="certification.organisation"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                type="date"
                                label="Issue date *"
                                required
                                v-model="certification.issueDate"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                type="date"
                                label="Expiry date *"
                                required
                                v-model="certification.expiryDate"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Credential ID *"
                                required
                                v-model="certification.credentialId"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field
                                label="Credential URL *"
                                required
                                v-model="certification.credentialURL"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>* indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialogCertif = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="createCertification">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!--/ Dialog for adding new Education -->
              </v-row>
            </v-row>
            <br />
            <!-- Laoder -->
            <Skeletonjobsloader v-if="showLoader" />
            <!-- /Loader -->
            <!-- Content -->
            <v-row
              v-for="certifications in userProfile.certificationses"
              :key="certifications.id"
              no-gutters
              v-else
            >
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-avatar class="mt-4">
                    <v-img
                      :src="
                        require('../../assets/user_images/certification-default.png')
                      "
                    />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h4 class="text-sm-left">{{ certifications.name }}</h4>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">
                        {{
                        certifications.organisation
                        }}
                      </span>
                    </v-row>
                    <v-row class="text-sm-left">
                      <small>
                        Issued
                        <timeago :datetime="certifications.issueDate" :auto-update="60"></timeago>-
                        <span v-if="certifications.expiryDate == null">No Expiry date</span>
                        <span v-else>
                          <!-- Auto-update time every 60 seconds -->
                          Expires
                          <timeago :datetime="certifications.expiryDate" :auto-update="60"></timeago>
                        </span>
                      </small>
                    </v-row>
                    <v-row class="text-sm-left">
                      <small>
                        Credential ID #
                        {{ certifications.credentialId }}
                      </small>
                    </v-row>
                    <v-row class="text-sm-left">
                      <small>
                        <a
                          :href="'//' + certifications.credentialUrl"
                          target="_blank"
                          rel="noopener noreferrer"
                        >See credential</a>
                      </small>
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
              <v-divider style="z-index: 4;"></v-divider>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ Certification  -->

    <!-- Language  -->
    <v-container class="mt-n6">
      <v-row dense class="mb-5">
        <v-col cols="12">
          <v-card :elevation="2">
            <v-row class="ml-5" no-gutters>
              <h3 class="mt-5">Languages</h3>
              <br />
              <v-row>
                <!-- Dialog for adding new Language -->

                <v-dialog v-model="dialogLang" persistent max-width="600px">
                  <template v-slot:activator="{ on, attrsLang }">
                    <span class="ml-7 mb-1 mt-4">
                      <v-btn
                        v-bind="attrsLang"
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
                      <span class="headline">Add Language</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field label="Language *" autofocus required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-overflow-btn
                                :items="dropdownProficiency"
                                label="Proficiency *"
                                target="#dropdown-example"
                              ></v-overflow-btn>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>* indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialogLang = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="dialogLang = false">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <!--/ Dialog for adding new Language -->
              </v-row>
            </v-row>
            <br />
            <!-- Laoder -->
            <Skeletonjobsloader v-if="showLoader" />
            <!-- /Loader -->
            <!-- Content -->
            <v-row
              v-for="languagespoken in userProfile.languagespokens"
              :key="languagespoken"
              no-gutters
              v-else
            >
              <v-col cols="2">
                <v-card :elevation="0" class="pa-2">
                  <v-avatar class="mt-4">
                    <v-img
                      :src="
                        require('../../assets/user_images/languages-default.png')
                      "
                    />
                  </v-avatar>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card :elevation="0" class="pa-2">
                  <v-container class="lighten-5">
                    <v-row>
                      <h4 class="text-sm-left">{{ languagespoken.language.languageName }}</h4>
                    </v-row>

                    <v-row class="text-sm-left">
                      <small>{{ languagespoken.languagelevel }}</small>
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
              <v-divider style="z-index: 4;"></v-divider>
            </v-row>
            <!-- / Content -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!--/ Language  -->
  </div>
</template>

<script>
import Skeletonjobsloader from "./Skeletonjobsloader.vue";
import firebase from "firebase";
import Avatar from "vue-avatar";
import axios from "axios";

export default {
  components: {
    Skeletonjobsloader,
    Avatar,
  },
  data() {
    return {
      certification: {
        // Certification data
        name: "",
        organisation: "",
        issueDate: "",
        expiryDate: "",
        credentialId: "",
        credentialURL: "",
      },
      experience: {
        // Experience data
        title: "",
        tel: "",
        email: "",
        company: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        country: "",
        town: "",
        street: "",
      },
      userProfile: null,
      dropdownProficiency: [
        "Elementary proficiency",
        "Limited working proficiency",
        "Professional working proficiency",
        "Full professional proficiency",
        "Native or bilingual proficiency",
      ],
      photoUrl: "", // for storing the current user's profile picture URL
      showLoader: true,
      dialogExp: false, // data for the dialog box of Experience
      dialogEdu: false, // data for the dialog box of Education
      dialogCertif: false, // data for the dialog box of Certification
      dialogLang: false, // data for the dialog box of Languages
      checkbox: false, //For the checkbox of currently work here
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
    // Variables for my request
    const username = "admin";
    const password = "dilan";

    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );

    // Getting the current login user
    const user = firebase.auth().currentUser;
    this.photoUrl = user.photoURL;

    const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/jobseeker/${user.uid}`;

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

  // All functions of this component
  methods: {
    //Generate ID function for what will be sent to the backend
    generateUniqueId: function () {
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log(text);
      return text;
    },

    // function to save certifications to the backend
    createCertification: function () {
      this.dialogCertif = false; // data for the dialog box of Certification
      // Getting the current login user
      var user = firebase.auth().currentUser;

      // Variables for my request
      const username = "admin";
      const password = "dilan";

      // Data to be sent to the endpoint
      const certificationDataObject = {
        id: this.generateUniqueId(),
        name: this.certification.name,
        organisation: this.certification.organisation,
        issueDate: this.certification.issueDate,
        expiryDate: this.certification.expiryDate,
        credentialId: this.certification.credentialId,
        credentialUrl: this.certification.credentialURL,
        jobseeker: {
          id: user.uid,
        },
      };
      console.log(certificationDataObject);
      const token = Buffer.from(`${username}:${password}`, "utf8").toString(
        "base64"
      );

      const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/certification/`;
      console.log(url);
      axios
        .post(url, certificationDataObject, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully sent certification to backend");
          console.log(typeof response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.showLoader = false));
      // End of request
      this.$mount(); // refresh the rout to fetch for chenages
    },
    // End of certification function

    // function to save experience to the backend
    createExperience: function () {
      this.dialogExp = false; // data for the dialog box of Certification
      // Getting the current login user
      var user = firebase.auth().currentUser;

      // Variables for my request
      const username = "admin";
      const password = "dilan";

      // Data to be sent to the endpoint
      const experienceDataObject = {
        id: this.generateUniqueId(),
        title: this.experience.title,
        tel: this.experience.tel,
        email: this.experience.email,
        company: this.experience.company,
        location: this.experience.location,
        description: this.experience.description,
        startDate: this.experience.startDate,
        endDate: this.experience.endDate,
        country: this.experience.country,
        town: this.experience.town,
        street: this.experience.street,
        jobseeker: {
          id: user.uid,
        },
      };
      console.log(experienceDataObject);
      const token = Buffer.from(`${username}:${password}`, "utf8").toString(
        "base64"
      );

      const url = `https://cors-anywhere.herokuapp.com/https://jobberserver.herokuapp.com/experience/`;
      console.log(url);
      axios
        .post(url, experienceDataObject, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((response) => {
          console.log("Successfully sent experience to backend");
          console.log(typeof response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => (this.showLoader = false));
      // End of request
      this.$mount(); // refresh the rout to fetch for chenages
    },
    // End of experience function
  },
};
</script>
