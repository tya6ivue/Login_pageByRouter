const state = {
  user: { email: "", password: "" },
  newDATA: [],
  ProfileEmail: "",
};

const getters = {
  getUserEmail() {
    return state.user.email;
  },
};

const mutations = {
  SIGNINPAGE_DATA(state, payload) {
    state.newDATA.push(payload);
    localStorage.setItem("userDatacreD", JSON.stringify(state.newDATA));
  },

  LOGINPAGE_DATA(state, payload) {
    localStorage.setItem(
      "LoginDataCredentials",
      JSON.stringify({
        isLogedin: state.isLogedin,
        LoginDetails: payload,
      })
    );
    let retrievedObject = localStorage.getItem("LoginDatacreD");
    let stored = JSON.parse(retrievedObject);
    state.user.email = stored;
  },

  LOGOUT() {
    localStorage.removeItem("localUserDetails");
    localStorage.removeItem("LoginDatacreD", "dfgh");
  },

  RETREIVEDATA(state, payload) {
    state.ProfileEmail = payload;
  },
};

const actions = {
  RetreiveData({ commit }, payload) {
    commit("RETREIVEDATA", payload);
  },

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
