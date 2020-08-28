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
                                      :src="require('../../assets/user_images/avatar-placeholder.png')"
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
                                      :src="require('../../assets/user_images/experience-default.png')"
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
                                      :src="require('../../assets/user_images/experience-default.png')"
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
                      <span class="headline">Add Experience</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form>
                          <v-row>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Title *" autofocus required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Company *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Tel *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Email *" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field label="Location *" required></v-text-field>
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
                      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
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
            <v-row v-for="exp in 2" :key="exp" no-gutters v-else>
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
                      <h4 class="text-sm-left">Software Engineer Intern</h4>
                      <span class="ml-2">2019 - 2019</span>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">SCOLARYX CORPORATE</span>
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <span>
                        Worked as a web developer intern here. We used
                        technologies like HTML5/CSS3, Bootstrap, PHP, moodle
                        CMS, etc and design tools like Photoshop, Premier Pro,
                        Illustrator etc
                      </span>
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
                                :label="`I currently attend: ${checkbox.toString()}`"
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
            <v-row v-for="exp in 2" :key="exp" no-gutters v-else>
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
                      <h4 class="text-sm-left">OpenClassrooms</h4>
                      <span class="ml-2">2019 - 2020</span>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">Front-End Development</span>
                    </v-row>
                    <v-row class="text-sm-left mt-2">
                      <span>Bachelor's degree</span>
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
                              <v-text-field label="Name *" autofocus required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Organisation *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field type="date" label="Issue date *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field type="date" label="Expiry date *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Credential ID *" required></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="4" md="6">
                              <v-text-field label="Credential URL *" required></v-text-field>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <small>* indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialogCertif = false">Close</v-btn>
                      <v-btn color="blue darken-1" text @click="dialogCertif = false">Save</v-btn>
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
            <v-row v-for="exp in 2" :key="exp" no-gutters v-else>
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
                      <h4 class="text-sm-left">Build Your Web Projects With REST APIs</h4>
                    </v-row>
                    <v-row class="mt-2">
                      <span class="subtitle-2 light">OpenClassrooms</span>
                    </v-row>
                    <v-row class="text-sm-left">
                      <small>Issued Jun 2019 - No Expiry date</small>
                    </v-row>
                    <v-row class="text-sm-left">
                      <small>Credential ID # 8005543859</small>
                    </v-row>
                    <v-row class="text-sm-left">
                      <small>
                        <a href="#" target="_blank" rel="noopener noreferrer">See credential</a>
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
            <v-row v-for="exp in 2" :key="exp" no-gutters v-else>
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
                      <h4 class="text-sm-left">Chinese - 中文</h4>
                    </v-row>

                    <v-row class="text-sm-left">
                      <small>Elementary proficiency</small>
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

export default {
  components: {
    Skeletonjobsloader,
  },
  data() {
    return {
      dropdownProficiency: [
        "Elementary proficiency",
        "Limited working proficiency",
        "Professional working proficiency",
        "Full professional proficiency",
        "Native or bilingual proficiency",
      ],
      showLoader: true,
      dialog: false, // data for the dialog box of Experience
      dialogEdu: false, // data for the dialog box of Education
      dialogCertif: false, // data for the dialog box of Certification
      dialogLang: false, // data for the dialog box of Languages
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
  },
};
</script>
