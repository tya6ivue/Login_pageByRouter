<template>
  <div>
    <Header />
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
            <section>
              <b-field label=" First Name">
                <b-input placeholder="e.g Kevin" v-model="firstname"></b-input>
              </b-field>

              <b-field label=" Last Name">
                <b-input placeholder="e.g Garvey" v-model="lastname"></b-input>
              </b-field>
              <b-field label="Email" type="is-danger">
                <!-- message="This email is invalid" -->
                <b-input
                  type="email"
                  placeholder="john@gmail.com"
                  v-model="signUpEmail"
                  maxlength="30"
                >
                </b-input>
              </b-field>

              <b-field label="Password" type="is-warning">
                <b-input
                  value="123"
                  type="password"
                  v-model="signUpPassword"
                  length="15"
                ></b-input>
              </b-field>
              <b-field label=" Confirm   Password" type="is-warning">
                <b-input
                  value="123"
                  type="password"
                  v-model="signUpCnfPassword"
                  length="15"
                ></b-input>
              </b-field>

              <b-field>
                <b-checkbox :value="true" type="is-danger" v-model="checked">
                  checkbox
                </b-checkbox>

                <b-button @click="Submit" type="is-danger">Sign up</b-button>

                <b-button
                  label="Launch snackbar (default)"
                  size="is-medium"
                  @click="snackbar = true"
                />

                <b-button
                  label="Launch snackbar (with cancel)"
                  size="is-medium"
                  @click="snackbar = false"
                />
              </b-field>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignupPage",
  components: {
    Header,
  },

  data() {
    return {
      firstname: "",
      lastname: "",
      signUpEmail: "",
      
      signUpPassword: "",
      signUpCnfPassword: "",
      checked: false,
      alertCustom: "",
    };
  },

  computed: {
    ...mapGetters("userData", ["isLogedin"]),
  },

  methods: {
    ...mapActions("userData", ["signin"]),

    Submit() {
      const checkfirstN = this.firstname.trim();
      const checklastN = this.lastname.trim();
      const checkemail = this.signUpEmail.trim();
      const checkpassword = this.signUpPassword.trim();
      const checkCnfpswd = this.signUpCnfPassword.trim();
      const checkedornot = this.checked;

      if (
        checkfirstN &&
        checklastN &&
        checkemail &&
        checkedornot &&
        checkpassword === checkCnfpswd
      ) {
        this.signin({
          firstname: this.firstname,
          lastname: this.lastname,
          signUpEmail: this.signUpEmail,
          checkCnfpswd: this.checkCnfpswd,
        });
        (this.firstname = ""),
          (this.lastname = ""),
          (this.signUpEmail = ""),
          (this.checkCnfpswd = ""),
          (this.checkpassword = "");
        this.$router.push("./ProfilePage");
      } else {
        alert("all fields are required");
      }
    },

    Custom() {
      this.$buefy.dialog.alert({
        title: "Title Alert",
        message: "I have a title, a custom button and <b>HTML</b>!",
        confirmText: "Cool!",
      });
    },
  },
};
</script>

<style>
</style>