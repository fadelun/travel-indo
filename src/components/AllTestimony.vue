<template>
  <swiper :slides-per-view="1" @swiper="onSwiper" @slideChange="onSlideChange">
    <swiper-slide
      ><p class="person-quote">"{{ testi.quote }}"</p>
      <p class="person-name">
        -<i>{{ testi.name }}</i>
      </p></swiper-slide
    >
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "AllTestimony",
  props: ["testi"],
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
