<template>
  <main class="text-white">
    <Tours />
    <Testimony />
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
