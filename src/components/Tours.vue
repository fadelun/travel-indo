<template>
  <!-- popular tours -->
  <div id="tours" class="content pt-20 pb-28 min-h-[600px]">
    <div class="background"></div>
    <div class="container relative">
      <h3 class="font-bold text-4xl mx-auto w-fit mb-12">POPULAR TOURS</h3>

      <!-- menu-cards -->
      <ul class="menu-tour flex flex-wrap justify-between">
        <li
          v-for="tour in tours"
          :key="tour"
          class="card relative w-[260px] h-[340px] rounded-md border-4 border-white hover:scale-105 duration-300 ease-in-out overflow-hidden"
        >
          <a href="#">
            <div class="card-image h-full">
              <img
                :src="require(`@/assets/images/bdg/img1.jpg`)"
                alt=""
                srcset=""
                class="object-center object-cover h-full"
              />
            </div>
            <div
              class="title text-center absolute inset-x-0 bottom-0 h-1/4 bg-[#0000006c]"
            >
              <h3 class="text-xl">{{ tour }}</h3>
              <p class="text-sm">There will be small text</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";
import data from "../data/data.js";

export default {
  name: "Tours",

  setup() {
    const tours = ref(["tour 1", "tour 2", "tour 3", "tour 4"]);

    onMounted(() => {
      console.log(data);
    });
    return {
      tours,
    };
  },
};
</script>
<style></style>
