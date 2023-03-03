<template>
  <!-- popular tours -->
  <div id="tours" class="content">
    <div class="background"></div>
    <div class="container">
      <h3>POPULAR TOURS</h3>

      <!-- menu-cards -->
      <ul class="menu-tour">
        <li v-for="tour in tours" :key="tour" class="card">
          <router-link to="/tour">
            <div class="card-image">
              <img :src="tour.images[0]" :alt="tour.city" />
            </div>
            <div class="wrapper-title">
              <p class="title">{{ tour.tours[0] }}</p>
              <p class="sub-title">{{ tour.city }}</p>
            </div>
          </router-link>
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
