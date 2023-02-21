<template>
  <Header />
  <Main />
</template>

<script>
import Header from "./views/Header.vue";
import Main from "./views/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
};
</script>
