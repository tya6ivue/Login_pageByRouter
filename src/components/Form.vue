 
<template>
<div>
   <div class="column is-5-tablet is-2-desktop  ">
                    <p class="subtitle"> Home Page </p>
   </div>
    <section class="mt-4">
        <div class="columns is-centered">
            <div class="column is-10-mobile is-offset-1-mobile is-4  has-background-color-dark">
                <div class="box">
                    <!-- <p class=" mb-4" v-if="message">{{message}}</p> -->
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                        <input class="input" type="email" v-model="EmailData" placeholder="abc@gmail.com">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" type="password" v-model="PasswordData" placeholder="********">
                        </div>
                    </div>
                         <b-button @click="Submit" type="is-danger">Log in</b-button>
                    <!-- <button class="button is-fullwidth is-Danger is-lighht" >Log in</button> -->
                </div>

            </div>
        </div>
    </section>
 <div class="text-center">
      <v-snackbar v-model="CheckInputBar">
        {{ AlertMsg }}

        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="CheckValue = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
</div>
</template>
<script>  
// import { mapActions } from 'vuex'


import {mapActions} from 'vuex'
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
    ...mapActions('userData', ['signin']),


    Submit() {
        // let EmailData =  this.EmailData.trim() > 0
  
                const newwd = this.EmailData.trim().length ;

        if ( this.PasswordData && newwd ) {
            this.signin({
                email: this.EmailData,
                Password: this.PasswordData,
            })
                this.EmailData = "",
                this.PasswordData = ""
                this.$router.push('/PageOne')
        }
        else{
            this.CheckInputBar = true
        }
    }

}

};  
</script>