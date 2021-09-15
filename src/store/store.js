import Vue from "vue";
import Vuex from "vuex";

import userData from "./modules/userData.modules";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    userData,
  },
});
