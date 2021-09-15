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
                <b-input
                  :type="type"
                  v-model="signUpPassword"
                  maxlength="16"
                  minlength="8"
                />
              </b-field>
              <b-field label=" Confirm Password" type="is-warning">
                <b-input
                  value="123"
                  type="text"
                  v-model="signUpCnfPassword"
                  maxlength="16"
                  minlength="8"
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
      type: "password",
      stored: [],
    };
  },

  methods: {
    ...mapActions("userData", ["signin"]),

    async Submit() {
      const checkfirstN = this.firstname.trim();
      const checklastN = this.lastname.trim();
      const checkemail = this.signUpEmail.trim();
      const checkpassword = this.signUpPassword.trim();
      const checkCnfpswd = this.signUpCnfPassword.trim();
      const checkedornot = this.checked;
      if (checkfirstN) {
        if (checklastN) {
          if (checkemail) {
            if (checkpassword) {
              if (checkCnfpswd == checkpassword) {
                if (checkedornot) {
                  if (checkCnfpswd.length > 7) {
                    let retrievedObject = localStorage.getItem("userDatacreD");
                    this.stored = JSON.parse(retrievedObject);
                    let duplicatePresent = false;
                    if (this.stored && this.stored.length) {
                      this.stored.forEach((element) => {
                        if (element.signUpEmail === this.signUpEmail) {
                          duplicatePresent = true;
                        }
                        if (element.checkCnfpswd === this.signUpPassword) {
                          duplicatePresent = true;
                        }
                      });
                    }
                    if (duplicatePresent) {
                      this.msg = "user already exist";
                      return;
                    } else {
                      localStorage.setItem(
                        "userDatacreD",
                        JSON.stringify(User)
                      );
                      this.$router.push("/loginpage");
                    }

                    let User = {
                      firstname: "",
                      lastname: "",
                      signUpEmail: "",
                      checkCnfpswd: "",
                    };

                    (User.firstname = this.firstname),
                      (User.lastname = this.lastname),
                      (User.signUpEmail = this.signUpEmail),
                      (User.checkCnfpswd = this.signUpCnfPassword),
                      await this.signin(User);
                  } else {
                    this.msg = "Password must be equals to 8 digits";
                  }
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
    },
  },
};
</script>