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
    return;
  },
  getLoginEmail() {
    return state.user.abc;
  },
};

const mutations = {
  LOGINPAGE_DATA(state, payload) {
    // let loginUserDetails = JSON.parse(localStorage.getItem("userDatacreD"));

    localStorage.setItem(
      "LoginDataCredentials",
      JSON.stringify({
        isLogedin: state.isLogedin,
        LoginDetails: payload,
      })
    );
    var localLoginDetails = JSON.parse(
      localStorage.getItem("LoginDataCredentials")
    );

    state.user.email = localLoginDetails.LoginDetails.email;
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
    commit("SIGNINPAGE_DATA", payload);
  },

  login({ commit }, payload) {
    commit("LOGINPAGE_DATA", payload);
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
