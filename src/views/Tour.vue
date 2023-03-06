<template>
  <!-- <div class="header bg-black h-24">
    <Navbar />
  </div> -->
  <header class="h-[500px] bg-[#030f33]">
    <Navbar />
    <!-- <div class="hero h-full relative pt-20 container">
      <div class="wrapper-title absolute left-2 bottom-5 text-white">
        <h3 class="title">Bromo, Malang</h3>
      </div>
    </div> -->
  </header>
  <div class="main"></div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Tour",
  components: {
    Navbar,
  },
};
</script>
