 
<template>
  <div>
    <Header />
    <div>
      <p>Home Page</p>

      <thead>
        <button @click="byName">Sort by Name</button>
        <button @click="byUserName">Sort by user Name</button>
      </thead>

      <table class="table">
        <thead>
          <tr class="tr">
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr class="tr" v-for="user in DataForSort" :key="user.id">
            <td>{{ user.firstname }} {{ user.lastname }}</td>
            <td>{{ user.signUpEmail }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "HomePge",
  data() {
    return {
      DataForSort: [],
      sortByName: [],
    };
  },
  components: {
    Header,
  },

  mounted() {
    let ProfileData = localStorage.getItem("userDatacreD");
    this.DataForSort = JSON.parse(ProfileData);
  },

  methods: {
    byName() {
      this.sortByName.push(this.DataForSort);

      this.DataForSort.sort(function (a, b) {
        return a.firstname.localeCompare(b.firstname);
      });
    },

    byUserName() {
      this.DataForSort.sort(function (a, b) {
        return a.signUpEmail.localeCompare(b.signUpEmail);
      });
    },
  },
};
</script>
    <style scoped>
.table {
  border: 1px solid black;
}
</style>