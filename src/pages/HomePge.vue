 
<template>
  <div>
    <LoginPage />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-2-desktop">
            <p class="subtitle">Home Page</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import LoginPage from "../components/LoginPage.vue";
export default {
  name: "Login",
  components: {
    LoginPage,
  },
};
</script>