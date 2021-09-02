 
<template>
  <div>
    <div>
      <div>Login Page</div>
    </div>

    <div class="column is-5-tablet is-2-desktop"></div>
    <section class="mt-4">
      <div class="columns is-centered">
        <div class="column is-10-mobile is-offset-1-mobile is-4">
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
                  :type="type"
                  v-model="PasswordData"
                  placeholder="********"
                />

                <button @click="showPassword">{{ btnText }}</button>
              </div>
            </div>
            <b-button @click="Submit" type="is-danger">Log in</b-button>
          </div>
        </div>
      </div>
    </section>
    <p>{{ message }}</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Form",
  data() {
    return {
      type: "password",
      btnText: "Show Password",
      EmailData: "",
      PasswordData: "",
      message: "",
      stored: [],
    };
  },

  mounted() {
    let retrievedObject = localStorage.getItem("LoginDatacreD");
    this.stored = JSON.parse(retrievedObject);
    if (this.stored && this.stored.length) {
      this.sendData();
    }
  },

  computed: {
    ...mapGetters("userData", ["getUserEmail"]),
  },

  methods: {
    ...mapActions("userData", ["login", "RetreiveData"]),

    Submit() {
      const newData = this.EmailData.trim();

      if (newData && this.PasswordData.trim()) {
        let loginUserDetails = JSON.parse(localStorage.getItem("userDatacreD"));

        if (loginUserDetails && loginUserDetails.length) {
          loginUserDetails.forEach((element) => {
            if (
              element.signUpEmail == this.EmailData &&
              element.checkCnfpswd == this.PasswordData
            ) {
              let User = {
                firstname: "",
              };

              (User.firstname = this.EmailData),
                localStorage.setItem("LoginDatacreD", JSON.stringify(User));
              this.$router.push("/ProfilePage");

              return;
            } else {
              this.message =
                "User name or password is not matched. please try again ";
              return;
            }
          });
        } else {
          this.message = "User name or password is not matched ";
        }

        (this.EmailData = ""), (this.PasswordData = "");
      } else {
        this.message = "please fill both input ";
      }
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

    async sendData() {
      await this.RetreiveData(this.stored);
    },
  },
};
</script>