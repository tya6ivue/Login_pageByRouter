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
  SIGNINPAGE_DATA(state, payload) {
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
        details: payload,
      })
    );
    var localUserDetails = JSON.parse(localStorage.getItem("LoginCredentials"));

    state.user.email = localUserDetails.details.signUpEmail;
    console.log(localUserDetails.details);
  },

  LOGINPAGE_DATA(state, payload) {
    localStorage.setItem(
      "LoginDataCredentials",
      JSON.stringify({
        // isLogedin: state.isLogedin,
        LoginDetails: payload,
      })
    );
    var localLoginDetails = JSON.parse(
      localStorage.getItem("LoginDataCredentials")
    );

    state.user.email = localLoginDetails.LoginDetails.email;
    console.log(localLoginDetails.LoginDetails);
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
