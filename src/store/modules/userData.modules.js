const state = {
  user: { email: "", password: "" },
  signUpEmail: "",
  firstname: "",
  lastname: "",
  checkCnfpswd: "",
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
    state.firstname = payload.firstname;
    state.lastname = payload.lastname;
    state.checkCnfpswd = payload.checkCnfpswd;
    state.username = payload.username;

    localStorage.setItem(
      "LoginCredentials",
      JSON.stringify({
        isLogedin: state.isLogedin,
        details: payload,
      })
    );
    var localUserDetails = JSON.parse(localStorage.getItem("LoginCredentials"));

    state.user.email = localUserDetails.details.firstname;
  },

  LOGOUT(state) {
    (state.user.email = ""),
      (state.user.password = ""),
      (state.isLogedin = false),
      (state.signUpEmail = ""),
      (state.firstname = ""),
      (state.lastname = ""),
      (state.checkCnfpswd = ""),
      localStorage.clear();
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
