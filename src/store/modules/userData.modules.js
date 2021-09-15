const state = {
  user: { email: "", password: "" },
  newDATA: [],
  ProfileEmail: "",
};

const getters = {
  getUserEmail() {
    return state.user.email;
  },

  getDataforHome() {
    return state.newDATA;
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
    localStorage.removeItem("LoginDatacreD");
  },

  RETREIVEDATA(state, payload) {
    state.ProfileEmail = payload;
  },
  EDIT_DATA(state, payload) {
    state.newDATA.forEach((element) => {
      if (element.signUpEmail == payload.Email) {
        element.firstname = payload.FirstName;
        element.lastname = payload.LastName;

        localStorage.setItem("userDatacreD", JSON.stringify(state.newDATA));
      }
    });
  },
  SEPERATE(state, payload) {
    state.newDATA = payload;
  },
  DELETE_FOR_D(state, payload) {
    const index = state.newDATA.findIndex(
      (x) => x.firstname === payload.firstname
    );
    state.newDATA.splice(index, 1);

    localStorage.setItem("userDatacreD", JSON.stringify(state.newDATA));
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

  EditData({ commit }, payload) {
    commit("EDIT_DATA", payload);
  },

  seperate({ commit }, payload) {
    commit("SEPERATE", payload);
  },
  deleteFormData({ commit }, payload) {
    commit("DELETE_FOR_D", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
