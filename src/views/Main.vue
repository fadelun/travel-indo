<template>
  <main class="text-white bg-[#070416] py-24">
    <div class="container">
      <Tours />
      <Testimony />
    </div>
  </main>
</template>
<script>
import Tours from "@/components/Tours.vue";
import Testimony from "@/components/Testimony.vue";

export default {
  name: "Main",
  components: {
    Tours,
    Testimony,
  },
};
</script>
<style></style>
