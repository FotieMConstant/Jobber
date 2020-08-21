import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Jobs from "../views/Jobs.vue";
import Userprofile from "../views/Userprofile.vue";
import Videocall from "../views/Videocall.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Your jobber Dashboard",
    },
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login to your Jobber account",
    },
  },
  {
    path: "/Signup",
    name: "Signup",
    component: Signup,
    meta: {
      title: "Signup for a Jobber account",
    },
  },
  {
    path: "/Jobs",
    name: "Jobs",
    component: Jobs,
    meta: {
      title: "Find jobs around you",
    },
  },
  {
    path: "/Userprofile",
    name: "Userprofile",
    component: Userprofile,
    meta: {
      title: "Your profile",
    },
  },
  {
    path: "/Videocall",
    name: "Videocall",
    component: Videocall,
    meta: {
      title: "Video call",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
