 
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
import { mapGetters } from "vuex";
import Header from "../components/Header.vue";
export default {
  name: "ProfilePage",
  // data() {
  
  // },
  components: {
    Header,
  },


  // mounted() {

  //     let data = null;
  //     let localUserDetails = JSON.parse(localStorage.getItem("userDatacreD"));
  //      console.log("mounted")
  //        if (this.getUserEmail) {
  //       data = this.getUserEmail;
  //       console.log("gttrrtggt");
  //     } else if (localUserDetails && localUserDetails.details) {
  //       data = localUserDetails.details.email;
  //       console.log();
  //       data = localUserDetails.details.firstname;
  //     }
  //     return data;
  // },

  computed: {
    ...mapGetters("userData", ["getUserEmail"]),
    isLoggedin() {
      let data = null;
      let localUserDetails = JSON.parse(localStorage.getItem("userDatacreD"));

      if (this.getUserEmail) {
        data = this.getUserEmail;
        console.log("gttrrtggt");
      } else if (localUserDetails && localUserDetails.details) {
        data = localUserDetails.details.email;
        console.log();
        data = localUserDetails.details.firstname;
      }
      return data;
    },
  },
};
</script>

lifecycle method 
mounted created 
computed methods and watch 