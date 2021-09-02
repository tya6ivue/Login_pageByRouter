import HomePge from "./pages/HomePge.vue";
import LoginPage from "../src/components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProfilePage from "../src/pages/ProfilePage.vue";

function guardMyroute(to, from, next) {
  let LoginDatacreD = localStorage.getItem("LoginDatacreD");

  if (LoginDatacreD) {
    if (to.fullPath == "/" || to.fullPath == "/ProfilePage") {
      next();
    } else {
      next("/");
    }
  } else {
    if (to.fullPath == "/" || to.fullPath == "/SignupPage") {
      next();
    } else {
      next("/loginPage"); // go to '/login';
    }
  }
}
function isLoggedInOrNot(to, from, next) {
  var LoginDatacreD = false;
  if (localStorage.getItem("LoginDatacreD")) LoginDatacreD = true;
  else LoginDatacreD = false;
  if (!LoginDatacreD) {
    if (to.fullPath == "/loginpage" || to.fullPath == "/SignupPage") {
      next(); // allow to enter login page
    } else {
      next("/loginpage");
    }
  } else {
    next("/"); // go to '/profile';
  }
}

export default [
  {
    path: "/",
    component: HomePge,
    beforeEnter: guardMyroute,
    name: HomePge,
  },
  {
    path: "/loginpage",
    component: LoginPage,
    beforeEnter: isLoggedInOrNot,
    name: LoginPage,
  },

  {
    path: "/ProfilePage",
    component: ProfilePage,
    beforeEnter: guardMyroute,
    name: ProfilePage,
  },

  {
    path: "/SignupPage",
    component: SignupPage,
    beforeEnter: isLoggedInOrNot,
    name: SignupPage,
  },

  { path: "/:catchAll(.*)", beforeEnter: guardMyroute, component: HomePge },
];
