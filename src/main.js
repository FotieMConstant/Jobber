import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store/store";
import firebase from "firebase";
import axios from "axios";
import VueAxios from "vue-axios";
import VueTimeago from "vue-timeago";

Vue.use(VueTimeago, {
  name: "Timeago", // Component name, `Timeago` by default
  locale: "en", // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    "zh-CN": require("date-fns/locale/zh_cn"),
    ja: require("date-fns/locale/ja"),
  },
});

Vue.use(VueAxios, axios);
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
    store.commit("setCurrentuser", user);
  } else {
    store.commit("setCurrentuser", null);
  }

  initialize();
});
