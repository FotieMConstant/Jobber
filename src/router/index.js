import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Jobs from "../views/Jobs.vue";
import Userprofile from "../views/Userprofile.vue";
import Videocall from "../views/Videocall.vue";
import Setupprofile from "../views/Setupprofile.vue";
import Recruiterprofile from "../views/RecruiterViews/Recruiterprofile.vue";
import store from "@/store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      auth: true,
      title: "Dashboard",
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
      title: "Search for jobs or find jobs around you",
    },
  },
  {
    path: "/jobseeker/profile",
    name: "Userprofile",
    component: Userprofile,
    meta: {
      auth: true,
      title: "Profile",
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
    path: "/jobseeker/base/v1/setup",
    name: "Setupprofile",
    component: Setupprofile,
    meta: {
      auth: false,
      title: "Base setup profile",
    },
  },

  // Routes for the Recruiters
  {
    path: "/recruiter/profile",
    name: "Recruiterprofile",
    component: Recruiterprofile,
    meta: {
      title: "Admin recruiter",
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

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.currentUser) {
    next({
      path: "/Login",
    });
  } else {
    next();
  }
});

export default router;
