<template>
  <Header />
  <Main />
  <Footer />
</template>

<script>
import Header from "./views/Header.vue";
import Main from "./views/Main.vue";
import Footer from "./views/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>
