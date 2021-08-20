 
<template>
  <div>
   <Header />
    <section class="hero is-small">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-2-desktop">
            <p class="subtitle">Welcome {{ isLoggedin }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, } from "vuex";
import Header from '../components/Header.vue'
export default {
  name: "ProfilePage",
  components: {
    Header
  },
  // computed: {
  //   ...mapGetters("userData", ["getUserEmail"]),
  // },



  computed: {
    // ...mapState("userData", ["isLogedin"]),

    ...mapGetters("userData", ["getUserEmail"]),

    isLoggedin() {
      let data = null;
      let localUserDetails = JSON.parse(
        localStorage.getItem("LoginCredentials")
      );
      console.log(localUserDetails);

      if (this.getUserEmail) {
        data = this.getUserEmail;
      } else if (localUserDetails && localUserDetails.details) {
        data = localUserDetails.details.email;
      }

      return data;
    },
  },

 
};
</script>