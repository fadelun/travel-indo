<template>
  <!-- popular tours -->
  <div id="tours" class="content pt-20 pb-28 min-h-[600px]">
    <div class="background"></div>
    <div class="container relative">
      <h3 class="font-bold text-4xl mx-auto w-fit mb-12">POPULAR TOURS</h3>

      <!-- menu-cards -->
      <ul class="menu-tour">
        <li v-for="tour in tours" :key="tour" class="card">
          <a href="#">
            <div class="card-image h-full">
              <img :src="tour.images[0]" :alt="tour.city" />
            </div>
            <div class="title">
              <h3 class="text-xl font-bold uppercase">{{ tour.tours[0] }}</h3>
              <p class="text-sm capitalize">{{ tour.city }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, onBeforeMount, onMounted } from "vue";
import popularTours from "../data/popularTours.js";

export default {
  name: "Tours",

  setup() {
    const tours = ref([]);

    onBeforeMount(() => {
      popularTours.map((tour) => {
        tours.value.push(tour);
      });
    });
    onMounted(() => {
      console.log(tours.value[2].city);
    });
    return {
      tours,
    };
  },
};
</script>
<style></style>
