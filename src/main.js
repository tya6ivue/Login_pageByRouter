import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import buefy from "buefy";
import PageOne from "./pages/PageOne";
// import  SubLogin from './pages/SubLogin'
import "buefy/dist/buefy.css";

import { store } from "./store/store";

Vue.use(VueRouter);
Vue.use(buefy);

Vue.config.productionTip = false;

const routes = [
  { path: '/PageOne', component: PageOne },
  // { path: '/', component: SubLogin },
];






const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  store: store,
  router: router,
}).$mount("#app");
