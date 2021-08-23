<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import MainPage from "./components/MainPage.vue";
export default {
  name: "App",

  computed: {
   
    ...mapGetters("userData", ["getUserEmail"]),
  },
  components: {
    // MainPage,
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
}
</style>
