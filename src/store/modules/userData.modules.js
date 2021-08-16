const state = {
  user: { email: "", password: "" },
  isLogedin: false,
};

const getters = {
  isLogedin(state) {
    return state.isLoggedIn;
  },
  getUserEmail() {
      return state.user.email
  }
};

const mutations = {
  LOGIN_PAGE(state, payload) {
    state.user.email = payload.email;
    state.user.password = payload.password;
    state.user.isLogedin = true;
  },
};

const actions = {
  signin(context, payload) {
    context.commit("LOGIN_PAGE", payload);
    console.log("sdg")
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
