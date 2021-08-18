const state = {
  user: { email: "", password: "" },
  isLogedin: false,
};

const getters = {
  isLogin(state) {
    var localUserDetails = JSON.parse(localStorage.getItem("LoginCredentials"));

    if (localUserDetails) {
      state.isLogedin = true;
    } else {
      state.isLogedin = false;
    }
    return state.isLoggedIn;
  },

  getUserEmail() {
    return state.user.email;
  },
};

const mutations = {
  LOGIN_PAGE(state, payload) {
    state.user.email = payload.email;
    state.user.password = payload.password;
    state.isLogedin = true;

    localStorage.setItem("LoginCredentials", {
      isLogedin: state.isLogedin,
      details: payload,
    });
  },

  LOGOUT(state) {
    console.log("logout");
    (state.user.email = ""),
      (state.user.password = ""),
      (state.isLogedin = false),
      localStorage.clear();
  },
};
const actions = {
  signin(context, payload) {
    context.commit("LOGIN_PAGE", payload);
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
