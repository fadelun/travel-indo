<template>
  <header>
    <Navbar />
    <Hero />
  </header>
</template>
<script>
import Navbar from "./Navbar.vue";
import Hero from "./Hero.vue";

export default {
  name: "Header",
  components: {
    Navbar,
    Hero,
  },
};
</script>
