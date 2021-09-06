 
<template>
  <div>
    <Header />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-2-desktop">
            <p class="subtitle">Welcome {{ stored.firstname }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  name: "ProfilePage",
  data() {
    return {
      stored: {},
    };
  },
  components: {
    Header,
  },

  mounted() {
    let retrievedObject = localStorage.getItem("LoginDatacreD");
    this.stored = JSON.parse(retrievedObject);
  },
};
</script>
