 
<template>
  <div>
    <Header />
    <div>
      <p>Home Page</p>
      <br />

      <b-dropdown v-model="filterBy" aria-role="list">
        <template v-if="isPublic" #trigger>
          <b-button :label="filterBy" @click="filterByName" />
        </template>

        <b-dropdown-item :value="'Name'" aria-role="listitem">
          <div class="media">
            <b-icon class="media-left" icon="earth"></b-icon>
            <div class="media-content">
              <h3>By Name</h3>
            </div>
          </div>
        </b-dropdown-item>

        <b-dropdown-item value="Email" aria-role="listitem">
          <div class="media">
            <b-icon class="media-left" icon="account-multiple"></b-icon>
            <div class="media-content">
              <h3>By Email</h3>
            </div>
          </div>
        </b-dropdown-item>
      </b-dropdown>

      <b-dropdown v-model="filterOrder" aria-role="list">
        <template v-if="Public" #trigger>
          <b-button :label="filterOrder" />
        </template>
        <b-dropdown-item value="By Ascending" aria-role="listitem">
          <div class="media">
            <b-icon class="media-left" icon="earth"></b-icon>
            <div class="media-content">
              <h3>By Asc</h3>
            </div>
          </div>
        </b-dropdown-item>

        <b-dropdown-item value="By Descending" aria-role="listitem">
          <div class="media">
            <b-icon class="media-left" icon="account-multiple"></b-icon>
            <div class="media-content">
              <h3>By Desc</h3>
            </div>
          </div>
        </b-dropdown-item>
      </b-dropdown>

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
      isPublic: true,
      DataForSort: [],
      sortByName: [],
      check: true,
      Public: true,
      filterBy: "Filter by",
      filterOrder: "filter by order",
    };
  },

  watch: {
    filterBy(newVal) {
      if (newVal === "Name") {
        if (this.filterOrder === "By Ascending") {
          this.AsendName();
        } else if (this.filterOrder === "By Descending") {
          this.descendingName();
        }
      } else if (newVal === "Email") {
        if (this.filterOrder === "By Ascending") {
          this.AsendUserName();
        } else if (this.filterOrder === "By Descending") {
          this.descendingUserName();
        }
      }
    },
    filterOrder(newVal) {
      if (newVal === "By Ascending") {
        if (this.filterBy === "Name") {
          this.AsendName();
        } else if (this.filterBy === "Email") {
          this.AsendUserName();
        }
      } else if (newVal === "By Descending") {
        if (this.filterBy === "Name") {
          this.descendingName();
        } else if (this.filterBy === "Email") {
          this.descendingUserName();
        }
      }
    },
  },

  components: {
    Header,
  },

  mounted() {
    let ProfileData = localStorage.getItem("userDatacreD");
    this.DataForSort = JSON.parse(ProfileData);
  },

  methods: {
    filterByName() {},

    AsendName() {
      if (this.DataForSort && this.DataForSort.length) {
        this.sortByName.push(this.DataForSort);

        this.DataForSort.sort(function (a, b) {
          return a.firstname.localeCompare(b.firstname);
        });
      }
    },

    AsendUserName() {
      if (this.DataForSort && this.DataForSort) {
        this.DataForSort.sort(function (a, b) {
          return a.signUpEmail.localeCompare(b.signUpEmail);
        });
      }
    },

    descendingName() {
      if (this.DataForSort && this.DataForSort) {
        this.DataForSort.sort(function (a, b) {
          return b.firstname.localeCompare(a.firstname);
        });
      }
    },
    descendingUserName() {
      if (this.DataForSort && this.DataForSort) {
        this.DataForSort.sort(function (a, b) {
          return b.signUpEmail.localeCompare(a.signUpEmail);
        });
      }
    },
  },
};
</script>
    <style scoped>
.table {
  border: 1px solid black;
  margin: auto;
  margin-top: 30px;
}
</style>