 
<template>
  <div>
    <Header />
    <div>
      <p>Home Page</p>
      <br />
<template>
    <b-dropdown v-model="isPublic" aria-role="list">
        <template v-if="isPublic" label="sdfg" #trigger>
            <b-button
               label="based on name!"
                @click="xxxxxxxxxx"
                type="is-primary"
            />
        </template>

        <template v-else #trigger>
            <b-button
                label="based on user name"
                @click="xxxxxxxxx"
                type="is-primary"
             />
        </template>


        <b-dropdown-item :value="true" aria-role="listitem">
            <div class="media">
          
                <div class="media-content">
                    <h3>based on name</h3>
                    
                  
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>based on  user name </h3>
                </div>
            </div>
        </b-dropdown-item>
    </b-dropdown>
</template>


<template>
    <b-dropdown v-model="isPublic" aria-role="list">

        <template v-if="isPublic" #trigger>
            <b-button
            @click="xxxxxxxx"
                label="Sort by ascending"
                type="is-primary" />
        </template>

        <template v-else #trigger>
            <b-button
            @click="xxxxxxxxx"
         
                label="Sort by descending"
                type="is-primary"
                icon-left="account-multiple"
                icon-right="menu-down" />
        </template>
        <b-dropdown-item :value="true" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="earth"></b-icon>
                <div class="media-content">
                    <h3>Sort by ascending</h3>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false" aria-role="listitem">
            <div class="media">
                <b-icon class="media-left" icon="account-multiple"></b-icon>
                <div class="media-content">
                    <h3>Sort by descending</h3>
                </div>
            </div>
        </b-dropdown-item>
    </b-dropdown>
</template>

        <!-- <b-dropdown-item>
          <button @click="byName">Sort by Name</button>
        </b-dropdown-item>
        <b-dropdown-item>
          <button @click="byUserName">Sort by user Name</button>
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown aria-role="list">
        <template #trigger="{ active }">
          <b-button
            label="based on order!"
            type="is-primary"
            :icon-right="active ? 'menu-up' : 'menu-down'"
          />
        </template>

        <b-dropdown-item>
          <button @click="ascending">Sort by ascending</button></b-dropdown-item
        >
        <b-dropdown-item>
          <button @click="descending">
            Sort by descending
          </button></b-dropdown-item
        >
      </b-dropdown> -->

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