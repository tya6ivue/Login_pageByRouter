



<template>
  <div>
    <section>
      <Header />
      <h1>Signup Page</h1>

      <div class="column is-5-tablet is-2-desktop"></div>
      <section class="mt-4">
        <div class="columns is-centered">
          <b-field label="Name">
            <b-input v-model="name"></b-input>
          </b-field>

          <b-field
            label="Email"
            type="is-danger"
            message="This email is invalid"
          >
            <b-input type="email" value="john@" maxlength="15"> </b-input>
          </b-field>

          <b-field
            label="Username"
            type="is-success"
            message="This username is available"
          >
            <b-input value="johnsilver" maxlength="15"></b-input>
          </b-field>

          <b-field label="Password">
            <b-input type="password" value="iwantmytreasure" password-reveal>
            </b-input>
          </b-field>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "SignUpPage",
  components: {
    Header,
  },
  data() {
    return {
      name: "John Silver",
    };
  },
};
</script>