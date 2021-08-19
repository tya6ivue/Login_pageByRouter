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
          <div v-if="isLogedin">
            <a>
              <strong>{{ getUserEmail }}</strong>
            </a>
          </div>
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="buttons" @click="logOutabc" v-if="isLogedin">
            <a class="button is-light">
              <strong>Log out </strong>
            </a>
          </div>
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/SignUp' }">
          <div class="buttons" v-if="!isLogedin">
            <b-navbar-item tag="router-link" :to="{ path: '/loginpage' }">
              <a class="button is-primary"> Log in </a>
            </b-navbar-item>
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
      logedin: true,
    };
  },
  mounted() {
    console.log(this.isLogedin, "isLoginisLoginisLogin");
  },
  computed: {
    ...mapState("userData", ["isLogedin"]),

    ...mapGetters("userData", ["getUserEmail"]),
  },

  methods: {
    ...mapActions("userData", ["logOut"]),
    logOutabc() {
      this.logOut();
      this.$router.push("/LoginPage");
    },
  },
};
</script>

<style>
</style>

  