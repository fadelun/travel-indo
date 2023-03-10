<template>
  <header class="bg-dark-blue">
    <Navbar />
    <div class="hero h-[580px] max-h-[94vh] relative pt-20">
      <figure class="images-wrapper absolute inset-0">
        <swiper
          :modules="modules"
          :loop="true"
          :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
          navigation
          class="w-full h-full"
        >
          <swiper-slide
            v-for="(image, index) in destination.images"
            :key="index"
          >
            <img
              :src="image"
              class="w-full h-full object-cover"
              :alt="(bromo, index)"
            />
            ></swiper-slide
          >
        </swiper>
      </figure>
    </div>
  </header>
  <main class="bg-white pt-6 mb-6">
    <div class="container flex gap-4">
      <div class="content w-3/4">
        <article class="">
          <div class="header mb-4">
            <h2 class="text-dark-blue">{{ destination.name }}</h2>
            <p class="text-xl text-slate-600">{{ destination.city }}</p>
          </div>
          <div class="main text-slate-600">
            <p>
              {{ destination.desc }}
            </p>
          </div>
        </article>
      </div>
      <aside class="border-2 border-slate-400 rounded-lg w-1/4 py-5 px-4">
        <p class="gallery-title mb-5">Gallery of images</p>
        <div class="gallery-images">
          <img
            class="w-full h-[120px] object-cover mb-4"
            v-for="(image, index) in destination.images"
            :key="index"
            :src="image"
            alt="bromo"
          />
        </div>
      </aside>
    </div>
  </main>
  <Footer />
</template>
<script>
import { Autoplay, Navigation } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

import dataDestination from "../data/dataDestination";
import { ref, onBeforeMount } from "vue";
export default {
  name: "Tour",
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const destination = ref(dataDestination[0]);

    return {
      destination,
      modules: [Autoplay, Navigation],
    };
  },
};
</script>
