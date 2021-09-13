 
<template>
  <div>
    <Header />
    <div>
      <p>Home Page</p>
      <br />

      <b-dropdown v-model="filterBy">
        <template #trigger>
          <b-button :label="filterBy" />
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
        <template #trigger>
          <b-button :label="filterOrder" />
        </template>
        <b-dropdown-item value="By Ascending" aria-role="listitem">
          <div class="media">
            <b-icon class="media-left" icon="earth"></b-icon>
            <div class="media-content">
              <h3>By Ascending</h3>
            </div>
          </div>
        </b-dropdown-item>

        <b-dropdown-item value="By Descending" aria-role="listitem">
          <div class="media">
            <b-icon class="media-left" icon="account-multiple"></b-icon>
            <div class="media-content">
              <h3>By Descending</h3>
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
          <tr class="tr" v-for="user in this.getDataforHome" :key="user.id">
            <td>{{ user.firstname }} {{ user.lastname }}</td>
            <td>{{ user.signUpEmail }}</td>
            <td>
              <b-button
                label="Edit"
                type="is-primary"
                size="is-small"
                @click="handleEdit(user)"
              />
              <b-button
                label="delete"
                type="is-primary"
                size="is-small"
                @click="handledelete(user)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 
        <b-button
            label="Edit"
            type="is-primary"
            size="is-small"
            @click="isComponentModalActive = true" /> -->

    <b-modal
      v-model="isComponentModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
    >
      <template #default="props">
        <Modals :formData="formProps" @close="props.close"> djej</Modals>
      </template>
    </b-modal>
  </div>
</template>

<script>
// import { use } from 'vue/types/umd';
import { mapGetters } from "vuex";
import Header from "../components/Header.vue";
import Modals from "../components/Modals.vue";
export default {
  name: "HomePge",
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        FirstName: "",
        LastName: "",
        email: "",
      },
      // getDataforHome: [],
      sortByName: [],

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
    Modals,
  },

  computed: {
    ...mapGetters("userData", ["getDataforHome"]),
  },

  //  mounted() {

  // //  console.log(this.getDataforHome)
  //  this.getDataforHome = this.getDataforHome

  //  },

  methods: {
    AsendName() {
      if (this.getDataforHome && this.getDataforHome.length) {
        this.sortByName.push(this.getDataforHome);

        this.getDataforHome.sort(function (a, b) {
          return a.firstname.localeCompare(b.firstname);
        });
      }
    },

    AsendUserName() {
      if (this.getDataforHome && this.getDataforHome) {
        this.getDataforHome.sort(function (a, b) {
          return a.signUpEmail.localeCompare(b.signUpEmail);
        });
      }
    },

    descendingName() {
      if (this.getDataforHome && this.getDataforHome) {
        this.getDataforHome.sort(function (a, b) {
          return b.firstname.localeCompare(a.firstname);
        });
      }
    },
    descendingUserName() {
      if (this.getDataforHome && this.getDataforHome) {
        this.getDataforHome.sort(function (a, b) {
          return b.signUpEmail.localeCompare(a.signUpEmail);
        });
      }
    },
    handleEdit(user) {
      (this.isComponentModalActive = true),
        (this.formProps.FirstName = user.firstname),
        (this.formProps.LastName = user.lastname),
        (this.formProps.email = user.signUpEmail);
    },

    handledelete(user) {
      this.getDataforHome.splice(user, 1);
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