
<template>
  <div>
    <Header />
    <Form />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
export default {
  name: "LoginPage",
  components: {
    Header,
    Form,
  },

  computed: {
    ...mapGetters("userData", ["isLogedin"]),
  },

  methods: {
    ...mapActions("userData", ["logOut"]),
    logout() {
      this.logOut();
      this.$router.push("/");
    },
  },
};
</script>