<template>
  <div>
    <form action="">
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
          <b-button label="Close" @click="closeModal" />
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
    formData: {
      default: () => {},
      type: Object,
    },
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
    (this.Firsttname = this.formData.FirstName),
      (this.Lastname = this.formData.LastName);
  },

  methods: {
    ...mapActions("userData", ["EditData"]),

    saveChanges() {
      (this.updatedValue.FirstName = this.Firsttname),
        (this.updatedValue.LastName = this.Lastname);
      this.updatedValue.Email = this.formData.email;
      this.EditData(this.updatedValue);
      this.$emit("close");
      (this.Firsttname = ""), (this.Lastname = "");
    },
    closeModal() {
      this.$emit("close"), (this.Firsttname = ""), (this.Lastname = "");
    },
    getData() {
      (this.Firsttname = this.formData.FirstName),
        (this.Lastname = this.formData.LastName);
    },
  },
};
</script>

<style>
</style>