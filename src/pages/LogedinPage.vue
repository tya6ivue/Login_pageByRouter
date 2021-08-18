 
<template>
  <div>
    <b-navbar class="has-background-warning">
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/ProfilePage' }">
          <img
            src="../assets/logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
            class="ml-3"
          />
        </b-navbar-item>
      </template>

      <template>
        <b-navbar-item tag="router-link" :to="{ path: '/ProfilePage' }">
          <div>
            <a>
              <strong>{{ getUserEmail }} </strong>
            </a>
          </div>
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/ProfilePage' }">
          <div>
            <a>
              <strong>{{ getUserEmail }} </strong>
            </a>
          </div>
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/LoginPage' }">
          <div class="buttons" @click="logOutabc">
            <a class="button is-light">
              <strong>Log out </strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-2-desktop">
            <p class="subtitle">Logged in as {{ getUserEmail }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LogedinPage",
  components: {},
  computed: {
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