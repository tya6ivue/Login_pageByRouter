<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


// const state = {
//   user: { email: "", password: "" },
//   signUpEmail: "",
//   firstname: "",
//   lastname: "",
//   checkCnfpswd: "",
//   isLogedin: false,
// };

const getters  = {
  //  getUserEmail() {
  //   return  localUserDetails
  // },
}


const mutations   =  {
   SIGNINPAGE_DATA(payload) {
  

    localStorage.setItem(
      "LoginCredentials",
      JSON.stringify({
        details: payload,
      })
    );
    var localUserDetails = JSON.parse(localStorage.getItem("LoginCredentials"));

    // var abc = localUserDetails.details.signUpEmail;
    console.log(localUserDetails.details);
  },
}

const actions = {
  signin({ commit }, payload) {
    commit("SIGNINPAGE_DATA", payload);
  },
}


export default {
  name: "App",

getters,
mutations,
actions

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
