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
        <b-navbar-item tag="router-link" :to="{ path: '/SignUp' }">
          <div class="buttons">
            <a class="button is-light">
              <strong>Sign up </strong>
            </a>

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
import { mapGetters } from "vuex";
export default {
  name: "Header",

  computed: {
    ...mapGetters("userData", ["isLogin"]),
  },
};
</script>

<style>
</style>

  