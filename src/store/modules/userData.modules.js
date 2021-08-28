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
    return   state.user.email 
  },
  getLoginEmail() {
    return state.user.email 
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
        
        // console.log(localLoginDetails.LoginDetails.email)
    state.user.email = localLoginDetails.LoginDetails.email;
    console.log(state.user.email)
  },

  LOGOUT(state) {
    (state.user.email = ""),
      (state.user.password = ""),
      (state.isLogedin = false),
      (state.signUpEmail = ""),
      (state.firstname = ""),
      (state.lastname = ""),
      (state.checkCnfpswd = "")
      // localStorage.clear();
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
