
<template>
  <b-navbar>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light" @click="logout()" v-if="isLogedin">
            <strong>Logout </strong>
          </a>

          <b-navbar-item tag="router-link" :to="{ path: '/SubLogin' }">
            <a class="button is-primary" v-if="!isLogedin"> Log in </a>
          </b-navbar-item>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("userData", ["isLogedin"]),
  },

  methods: {
    ...mapActions("userData", ["logout"]),
    logout() {
      this.logout();
      this.$router.push("/");
    },
  },
};
</script>