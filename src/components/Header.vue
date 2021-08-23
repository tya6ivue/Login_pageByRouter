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
          <div class="buttons" @click="logOutabc" v-if="isLoggedin">
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
import { mapState, mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Header",

  data() {
    return {
      logedin: false,
      userEmail: "",
    };
  },

  computed: {
    ...mapState("userData", ["isLogedin"]),

    ...mapGetters("userData", ["getUserEmail"]),

    isLoggedin() {
      let data = null;
      let localUserDetails = JSON.parse(
        localStorage.getItem("LoginCredentials")
      );

      if (this.getUserEmail) {
        data = this.getUserEmail;
      } else if (localUserDetails && localUserDetails.details) {
        data = localUserDetails.details.email;
      }

      return data;
    },
  },

  methods: {
    ...mapActions("userData", ["logOut"]),
    logOutabc() {
      this.logOut();
    },
  },
};
</script>

<style>
</style>

  