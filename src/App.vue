<template>
  <div id="app">
    <LoginPage />
    <Form />
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import LoginPage from "./components/LoginPage.vue";

export default {
  name: "App",
  components: {
    Form,
    LoginPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
