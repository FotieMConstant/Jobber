import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import firebase from "firebase";

Vue.config.productionTip = false;

let app;

const initialize = () => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.commit('setCurrentuser', user);
  } else {
    store.commit('setCurrentuser', null);
  }

  initialize();
});
