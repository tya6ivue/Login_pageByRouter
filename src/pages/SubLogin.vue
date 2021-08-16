 
<template>
  <div>
    <LoginPage />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-6-tablet is-2-desktop">
            <p class="subtitle">Login Page</p>
          </div>
        </div>
      </div>
    </section>
    <Form />
  </div>
</template>
<script>
import LoginPage from "../components/LoginPage.vue";
import Form from "../components/Form.vue";
export default {
  name: "Login",
  components: {
    LoginPage,
    Form,
  },
};
</script>