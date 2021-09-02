<template>
  <div>
    <b-navbar class="has-background-warning">
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="../assets/logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
            class="ml-3"
          />
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/ProfilePage' }">
          <div v-if="isLoggedin">
            <a>
              <strong>{{ isLoggedin }}</strong>
            </a>
          </div>
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/loginpage' }">
          <div class="buttons" @click="logOutButton" v-if="isLoggedin">
            <a class="button is-light">
              <strong>Log out </strong>
            </a>
          </div>
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/SignupPage' }">
          <div class="buttons" v-if="!isLoggedin">
            <a class="button is-light">
              <strong>Sign up</strong>
            </a>
          </div>
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/loginpage' }">
          <div class="buttons" v-if="!isLoggedin">
            <a class="button is-light">
              <strong>Log in </strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Header",

  data() {
    return {
      logedin: false,
      userEmail: "",
      stored: "",
    };
  },

  mounted() {
    let retrievedObject = localStorage.getItem("LoginDatacreD");
    this.stored = JSON.parse(retrievedObject);
    if (this.stored && this.stored.length) {
      this.sendData();
    }
  },

  computed: {
    ...mapState("userData", ["isLogedin"]),

    ...mapGetters("userData", ["getUserEmail"]),

    isLoggedin() {
      let data = null;
      let localUserDetails = JSON.parse(localStorage.getItem("LoginDatacreD"));

      if (this.getUserEmail) {
        data = this.getUserEmail;
      } else if (localUserDetails && localUserDetails.firstname) {
        data = localUserDetails.firstname;
      }

      return data;
    },
  },

  methods: {
    ...mapActions("userData", ["logOut"]),
    logOutButton() {
      this.logOut();
    },
  },
};
</script>

<style>
</style>

  