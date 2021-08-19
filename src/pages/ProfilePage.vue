 
<template>
  <div>
   <Header />
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
import { mapGetters, } from "vuex";
import Header from '../components/Header.vue'
export default {
  name: "ProfilePage",
  components: {
    Header
  },
  computed: {
    ...mapGetters("userData", ["getUserEmail"]),
  },

 
};
</script>