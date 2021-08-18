 
<template>
  <div>
  <Header />
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
import Header from '../components/Header.vue'
export default {
  name: "HomePge",
  components: {
    Header
  },
};
</script>