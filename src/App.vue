<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return{
      DataForSort: []
    }
  },

methods: {

    ...mapActions("userData", ["seperate"]),

     Retreive() {
       this.seperate(this.DataForSort)
     }

},

 mounted() {
    let ProfileData = localStorage.getItem("userDatacreD");
       if ( ProfileData  && ProfileData.length) {
         
         this.DataForSort = JSON.parse(ProfileData);
       }
        
        if (this.DataForSort && this.DataForSort.length) {
               this.Retreive()
        }
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
