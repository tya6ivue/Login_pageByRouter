 
<template>
  <div>
    <LoginPage />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-2-desktop">
            <p class="subtitle">Welcome {{ getUserEmail }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import LoginPage from "../components/LoginPage.vue";
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  components: {
    LoginPage,
  },
  computed: {
    ...mapGetters("userData", ["getUserEmail"]),
  },
};
</script>