const state = {
  user: { email: "", password: "" },
  signUpEmail: "",
  firstname: "",
  lastname: "",

  checkCnfpswd: "",
  username: "",
  isLogedin: false,
};

console.log(state.user.email);
const getters = {
  getUserEmail() {
    return state.user.email;
  },
};

console.log(state.user.email);
const mutations = {
  LOGIN_PAGE(state, payload) {
    state.user.email = payload.email;
    state.user.password = payload.password;
    state.isLogedin = true;

    console.log(state.firstname);
    state.firstname = payload.firstname;
    state.lastname = payload.lastname;
    state.checkCnfpswd = payload.checkCnfpswd;
    state.user.email = payload.signUpEmail;
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
    console.log(state.user.email);
    console.log(localUserDetails.details.firstname);
  },

  SIGNUP_PAGE(state, payload) {
    state.firstname = payload.firstname;
    state.lastname = payload.password;
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
      (state.signUpEmail = ""),
      (state.firstname = ""),
      (state.lastname = ""),
      (state.checkCnfpswd = ""),
      (state.username = ""),
      localStorage.clear();
  },
};

const actions = {
  signin({ commit }, payload) {
    commit("LOGIN_PAGE", payload);
  },

  signup({ commit }, payload) {
    commit("SIGNUP_PAGE", payload);
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
