import HomePge from "./pages/HomePge.vue";
import LoginPage from "../src/components/LoginPage";
import ProfilePage from "../src/pages/ProfilePage.vue";
import SignUpPage from "../src/components/SignUpPage";
import LogedinPage from "./pages/LogedinPage";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("LoginCredentials")) isAuthenticated = true;
  else {
    isAuthenticated = false;
  }

  console.log(isAuthenticated);
  if (isAuthenticated) {
    if (to.fullPath == "/" || to.fullPath == "/ProfilePage") {
      next();
    } else {
      next("/");

      console.log(isAuthenticated);
    }
  } else {
    next("/LoginPage"); // go to '/login';
    console.log("wefrg");
  }
}

function isLoggedInOrNot(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("LoginCredentials")) isAuthenticated = true;
  else isAuthenticated = false;
  if (!isAuthenticated) {
    if (to.fullPath == "/LoginPage") {
      next(); // allow to enter login page
    } else {
      next("/LoginPage");
    }
  } else {
    next("/ProfilePage"); // go to '/profile';
  }
}

export default [
  {
    path: "/loginpage",
    component: LoginPage,
    beforeEnter: isLoggedInOrNot,
    name: LoginPage,
  },
  { path: "/", component: HomePge, beforeEnter: guardMyroute, name: HomePge },
  {
    path: "/ProfilePage",
    component: ProfilePage,
    beforeEnter: guardMyroute,
    name: ProfilePage,
  },
  {
    path: "/SignUp",
    component: SignUpPage,
    name: SignUpPage,
  },
  {
    path: "/LogedinPage",
    component: LogedinPage,
    name: LogedinPage,
  },

  { path: "/:catchAll(.*)", beforeEnter: guardMyroute, component: HomePge },
];
