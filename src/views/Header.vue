<template>
  <header>
    <Navbar />
    <Hero />
  </header>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Header",
  components: {
    Navbar,
    Hero,
  },
};
</script>
