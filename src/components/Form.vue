 
<template>
  <div>
    <div class="column is-5-tablet is-2-desktop">
    </div>
    <section class="mt-4">
      <div class="columns is-centered">
        <div
          class="
            column
            is-10-mobile is-offset-1-mobile is-4
            has-background-color-darkhttps://github.com/tya6ivue/Login_pageByRouter.git
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
    <!-- <div class="text-center">
      <v-snackbar v-model="CheckInputBar">
        {{ AlertMsg }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="CheckValue = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div> -->
  </div>
</template>
<script>
// import { mapActions } from 'vuex'

import { mapActions } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      EmailData: "",
      PasswordData: "",
      CheckInputBar: false,
      AlertMsg: "Please fill both input",
      // CheckValue: false
    };
  },

  methods: {
    ...mapActions("userData", ["signin"]),

    Submit() {
      // let EmailData =  this.EmailData.trim() > 0

      const newwd = this.EmailData.trim();

      if (this.PasswordData && newwd) {
        //   console.log("afewf")
        this.signin({
          email: this.EmailData,
          Password: this.PasswordData,
        });
        (this.EmailData = ""), (this.PasswordData = "");
        this.$router.push('/PageOne')
      } else {
        alert("both fill both input")
      }
    },
  },
};
</script>