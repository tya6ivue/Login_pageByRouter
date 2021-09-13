<template>
  <div>
    <form action="">
      <!-- {{this.formData}} -->
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
          <button type="button" class="delete" @click="$emit('close')" />
        </header>
        <section class="modal-card-body">
          <b-field label="name">
            <b-input
              type="text"
              v-model="Firsttname"
              placeholder="Your name"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Email">
            <b-input
              type="text"
              v-model="Lastname"
              password-reveal
              placeholder="Your email"
              required
            >
            </b-input>
          </b-field>
        </section>
        <footer class="modal-card-foot">
          <b-button label="Close" @click="$emit('close')" />
          <b-button
            label="Save changes"
            @click="saveChanges"
            type="is-primary"
          />
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modals",
  props: {
    formData: Object,
  },
  data() {
    return {
      updatedValue: {
        FirstName: "",
        LastName: "",
        Email: "",
      },
      Firsttname: "",
      Lastname: "",
    };
  },

  mounted() {
    //    console.log("sdfghj")
    // console.log(this.formData);
    (this.Firsttname = this.formData.FirstName),
      (this.Lastname = this.formData.LastName);
  },

  methods: {
    // ...mapActions("UserData", ["EditData"]),
    ...mapActions("userData", ["EditData"]),

    saveChanges() {
      (this.updatedValue.FirstName = this.Firsttname),
        (this.updatedValue.LastName = this.Lastname);
      this.updatedValue.Email = this.formData.email;
      //   console.log(this.updatedValue);
      this.EditData(this.updatedValue);
      console.log("ye haiiii first");
      console.log(" ye dusra");

      this.$emit("close");
      (this.Firsttname = ""), (this.Lastname = "");
    },
  },
};
</script>

<style>
</style>