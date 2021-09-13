const state = {
  user: { email: "", password: "" },
  newDATA: [],
  ProfileEmail: "",
};

const getters = {
  getUserEmail() {
    // console.log("sdfgh")
    // console.log(state.user.email)
    return state.user.email;

  },

  getDataforHome() {
    // console.log("dfghjhgfd")
    // console.log(state.newDATA)
    return state.newDATA
  }
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
    console.log("sdfghj")
        console.log(payload)
        console.log(state.newDATA)

          state.newDATA.forEach(element => {
            console.log(payload.Email)
            console.log(element.signUpEmail)
                 if (element.signUpEmail == payload.Email) {
                       element.firstname = payload.FirstName 
                    element.lastname  =    payload.LastName

                    localStorage.setItem("userDatacreD", JSON.stringify(state.newDATA));
                  }
                 else console.log("dsdvfdsfds")
          });


        //  if (payload.Email == state.signUpEmail) {
        //       alert("mil  gye value")
        //  }
        //  else("pata na kya hi haiii")

         
  },
  SEPERATE(state, payload) {
     state.newDATA = payload
    //  console.log(state.newDATA)
  }

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

  EditData({commit}, payload) {
      commit("EDIT_DATA", payload)
  },

  seperate({commit}, payload) {
      commit("SEPERATE", payload)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
