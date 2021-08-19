const state = {
  user: { email: "", password: "" },
  isLogedin: false,
};

const getters = {
  // isLogin(state) {
  //   var localUserDetails = JSON.parse(localStorage.getItem("LoginCredentials"));
  //   console.log(localUserDetails, 'localUserDetailslocalUserDetailslocalUserDetails');

  //   if (localUserDetails) {
  //   return state.isLogedin = true
  //   } else {
  //   return state.isLogedin = false
  //   }

  // },

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
  },

  LOGOUT() {
    console.log("logout");
    (state.user.email = ""),
      (state.user.password = ""),
      (state.isLogedin = false),
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
