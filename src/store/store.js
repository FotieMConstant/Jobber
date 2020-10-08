import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    currentUserRole: null,
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    setCurrentUserRole(state, payload) {
      state.currentUserRole = payload;
    },
  },
  actions: {},
});
