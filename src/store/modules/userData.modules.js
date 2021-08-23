const state = {
  user: { email: "", password: "" },
  isLogedin: false,
};

const getters = {
  getUserEmail() {
    return state.user.email;
  },
};

const mutations = {
  LOGIN_PAGE(state, payload) {
    state.user.email = payload.email;
    state.user.password = payload.password;
    state.isLogedin = true;

    localStorage.setItem(
      "LoginCredentials",
      JSON.stringify({
        isLogedin: state.isLogedin,
        details: payload,
      })
    );
    var localUserDetails = JSON.parse(localStorage.getItem("LoginCredentials"));

    state.user.email = localUserDetails.details.email;
  },

  LOGOUT(state) {
    (state.user.email = ""),
      (state.user.password = ""),
      (state.isLogedin = false),
      localStorage.clear();

    state.user.password = "";
  },
};
const actions = {
  signin({ commit }, payload) {
    commit("LOGIN_PAGE", payload);
  },

  logOut(context, payload) {
    context.commit("LOGOUT", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
