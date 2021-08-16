const state = {
  user: { email: "", password: "" },
  isLogedin: false,
};

const getters = {
  isLogedin(state) {
    return state.isLoggedIn;
  },
};

const mutations = {
  LOGIN_PAGE(state, payload) {
    state.user.payload.email = payload.email;
    state.user.payload.password = payload.password;
    state.user.isLogedin = true;
  },
};

const actions = {
  signin(context, payload) {
    context.commit("LOGIN_PAGE", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
