<template>
  <main class="text-white">
    <Tours />
    <Testimony />
  </main>
</template>
<script>
import Tours from "./Tours.vue";
import Testimony from "./Testimony.vue";

export default {
  name: "Main",
  components: {
    Tours,
    Testimony,
  },
};
</script>
