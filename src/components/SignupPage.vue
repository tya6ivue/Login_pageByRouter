<template>
  <div>
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
              <b-field
                label="Email"
                type="is-danger"
                message="This email is invalid"
              >
                <b-input
                  type="email"
                  placeholder="john@gmail.com"
                  v-model="signUpEmail"
                  maxlength="15"
                >
                </b-input>
              </b-field>

              <b-field
                label="Username"
                type="is-success"
                message="This username is available"
              >
                <b-input
                  value="johnsilver"
                  v-model="username"
                  maxlength="15"
                ></b-input>
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
                <b-checkbox :value="true" type="is-danger">
                  checkbox
                </b-checkbox>

                <b-button @click="Submit" type="is-danger">Sign up</b-button>

                <b-button
                  label="Launch alert (default)"
                  type="is-primary"
                  size="is-medium"
                  @click="alertCustom = true"
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
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignupPage",

  data() {
    return {
      firstname: "",
      lastname: "",
      signUpEmail: "",
      username: "",
      signUpPassword: "",
      signUpCnfPassword: "",
      alertCustom: false,
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
      const checkuserN = this.username.trim();

      if (
        checkfirstN &&
        checklastN &&
        checkuserN &&
        checkemail &&
        checkpassword === checkCnfpswd
      ) {
        this.signin({
          firstname: this.firstname,
          lastname: this.lastname,
          signUpEmail: this.signUpEmail,
          checkCnfpswd: this.checkCnfpswd,
          username: this.username,
        });
        (this.firstname = ""),
          (this.lastname = ""),
          (this.signUpEmail = ""),
          (this.checkCnfpswd = ""),
          (this.checkpassword = "");
        this.username = "";
        this.$router.push("./ProfilePage");
      } else {
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