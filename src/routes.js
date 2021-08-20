import HomePge from "./pages/HomePge.vue";
import LoginPage from "../src/components/LoginPage";
import ProfilePage from "../src/pages/ProfilePage.vue";

function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("LoginCredentials")) isAuthenticated = true;
  else {
    isAuthenticated = false;
  }

  if (isAuthenticated) {
    console.log(isAuthenticated);
    if (to.fullPath == "/" || to.fullPath == "/ProfilePage") {
      next();
    } else {
      next("/");
    
    }
  } else {
    if (to.fullPath == "/") {
      next();
    } else {
      next("/loginPage"); // go to '/login';
    }
    
  }
}
function isLoggedInOrNot(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem("LoginCredentials")) isAuthenticated = true;
  else isAuthenticated = false;
  if (!isAuthenticated) {
    if (to.fullPath == "/LoginPage") {
      next(); // allow to enter login page
      console.log("egrthrtjhyj");
    } else {
      next("/LoginPage");
    }
  } else {
    next("/ProfilePage"); // go to '/profile';
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

  { path: "/:catchAll(.*)", beforeEnter: guardMyroute, component: HomePge },
];
