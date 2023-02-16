<template>
  <Header />
</template>

<script>
import Header from "./views/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Poppins, Open-sans, sans-serif;
  background: url(./assets/images/background.jpg);
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
