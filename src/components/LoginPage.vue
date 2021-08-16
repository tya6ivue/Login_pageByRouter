
<template>
  <b-navbar>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-light" @click="logout()" v-if="isLogedin">
            <strong>Logout </strong>
          </a>
          <a class="button is-primary" v-if="!isLogedin"> Log in </a>
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