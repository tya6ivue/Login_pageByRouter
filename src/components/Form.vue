 
<template>
  <div>
    <div class="has-background-info">
      <div class="has-text-black">Login Page</div>
    </div>

    <div class="column is-5-tablet is-2-desktop"></div>
    <section class="mt-4">
      <div class="columns is-centered">
        <div
          class="
            column
            is-10-mobile is-offset-1-mobile is-4
            has-background-color-red
          "
        >
          <div class="box">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  v-model="EmailData"
                  placeholder="abc@gmail.com"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  v-model="PasswordData"
                  placeholder="********"
                />
              </div>
            </div>
            <b-button @click="Submit" type="is-danger">Log in</b-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      EmailData: "",
      PasswordData: "",
      Msg: "Please fill both input",
    };
  },

  computed: {
    ...mapGetters("userData", ["isLogedin"]),
  },

  methods: {
    ...mapActions("userData", ["signin"]),

    async Submit() {
      const newwd = this.EmailData.trim();

      if (newwd && this.PasswordData.trim()) {
        await this.signin({
          email: this.EmailData,
          Password: this.PasswordData,
        });
        (this.EmailData = ""), (this.PasswordData = "");
        this.$router.push("/ProfilePage");
      } else {
        alert("Both field are required");
      }
    },
  },
};
</script>