<template>
  <!-- <div class="header bg-black h-24">
    <Navbar />
  </div> -->
  <header class="h-[92vh]">
    <Navbar />
    <div class="hero h-full relative pt-20 container">
      <div class="wrapper-title absolute left-2 bottom-2 text-white">
        <h3 class="title">Bromo, Malang</h3>
      </div>
    </div>
  </header>
  <div class="main"></div>
</template>
<script>
// import Header from "@/components/Header.vue";

import Navbar from "@/components/Navbar.vue";

export default {
  name: "Tour",
  components: {
    Navbar,
  },
};
</script>
