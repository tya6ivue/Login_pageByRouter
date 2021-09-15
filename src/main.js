import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Buefy from "buefy";

import "buefy/dist/buefy.css";
import routes from "./routes";
import { store } from "./store/store";

Vue.use(VueRouter);
Vue.use(Buefy);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  router: router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
