<template>
  <swiper
    :modules="modules"
    :space-between="16"
    :loop="true"
    :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
  >
    <swiper-slide v-for="testi in allTestimony" :key="testi.name">
      <p class="person-quote">{{ testi.quote }}</p>
      <p class="person-name">
        -<i>{{ testi.name }}</i>
      </p></swiper-slide
    >
  </swiper>
</template>
<script>
import { Autoplay, Pagination } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default {
  name: "AllTestimony",
  props: ["allTestimony"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
      //   console.log(swiper.);
    };

    return {
      onSwiper,

      modules: [Autoplay, Pagination],
    };
  },
};
</script>
