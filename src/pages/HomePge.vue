 
<template>
  <div>
    <Header />
    <div>
      <p>Home Page</p>

      <SignupPage />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import SignupPage from "../components/SignupPage.vue";
export default {
  name: "HomePge",
  components: {
    Header,
    SignupPage,
  },
};
</script>
    