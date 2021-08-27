<template>
  <div>
    <Header />
    <h1>{{ msg }}</h1>
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
                <b-input
                  type="email"
                  placeholder="john@gmail.com"
                  v-model="signUpEmail"
                  maxlength="30"
                >
                </b-input>
              </b-field>

              <b-field label="Password" type="is-warning">
                <b-input :type="type" v-model="signUpPassword" length="15" />
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
                  I agree to terms and conditions
                </b-checkbox>
              </b-field>

              <b-field>
                <b-button @click="Submit" type="is-danger">Sign up</b-button>
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
import { mapActions } from "vuex";

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
      msg: "",
      signUpPassword: "",
      signUpCnfPassword: "",
      checked: false,
      alertCustom: "",

      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "Password",

      type: "password",
      btnText: "Show Password",
    };
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

      let stored = null;
      if (checkfirstN) {
        if (checklastN) {
          if (checkemail) {
            if (checkpassword) {
              if (checkCnfpswd == checkpassword) {
                if (checkedornot) {
                  let checkLocal = JSON.parse(
                    localStorage.getItem("userDatacreD")
                  );

                  if (checkLocal && checkLocal.length) {
                    checkLocal.forEach((element) => {
                      if (element.signUpEmail === this.signUpEmail) {
                        alert("user is already exist");
                        return;
                      } else {
                        this.$router.push("/loginpage");
                      }
                    });
                  } else {
                    localStorage.setItem("userDatacreD", JSON.stringify(User));
                    this.$router.push("/loginpage");
                  }

                  let User = [
                    {
                      firstname: this.firstname,
                      lastname: this.lastname,
                      signUpEmail: this.signUpEmail,
                      checkCnfpswd: this.checkCnfpswd,
                    },
                  ];
                  localStorage.setItem("userDatacreD", JSON.stringify(User));
                  let retrievedObject = localStorage.getItem("userDatacreD");
                  stored = JSON.parse(retrievedObject);
                  console.log(stored);
                } else {
                  this.msg = "Please sellect terms and conditions";
                }
              } else {
                this.msg = "Password Did not Match, Try Again.";
              }
            } else {
              this.msg = "Password is Mendatory";
            }
          } else {
            this.msg = "Email id is Mendatory";
          }
        } else {
          this.msg = "Last Name is Mendatory";
        }
      } else {
        this.msg = "First Name is Mendatory";
      }

      // let User = [
      //   {
      //     firstname: this.firstname,
      //     lastname: this.lastname,
      //     signUpEmail: this.signUpEmail,
      //     checkCnfpswd: this.checkCnfpswd,
      //   },
      // ];
      // localStorage.setItem("userDatacreD", JSON.stringify(User));
      // let retrievedObject = localStorage.getItem("userDatacreD");
      // stored = JSON.parse(retrievedObject);
      // console.log(stored)
    },

    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.btnText = "Hide Password";
      } else {
        this.type = "password";
        this.btnText = "Show Password";
      }
    },
  },
};
</script>

<style>
</style>