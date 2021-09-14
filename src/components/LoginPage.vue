
<template>
  <div>
    <Header />
    <Form />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Form from "../components/Form.vue";
export default {
  Name: "LoginPage",
  components: {
    Header,
    Form,
  },
};
</script>