<template>
  <header class="bg-dark-blue">
    <Navbar />
    <div class="hero h-[580px] max-h-[94vh] relative pt-20">
      <figure class="images-wrapper absolute inset-0">
        <swiper
          :modules="modules"
          :space-between="16"
          :loop="true"
          :autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
          navigation
          class="w-full h-full"
        >
          <swiper-slide>
            <img
              src="../assets/images/mlg/img1.jpg"
              class="w-full h-full object-cover"
              alt="bromo"
            />
            ></swiper-slide
          >

          <swiper-slide
            ><img
              src="../assets/images/mlg/img1.jpg"
              class="w-full h-full object-cover"
              alt="bromo"
          /></swiper-slide>

          <swiper-slide
            ><img
              src="../assets/images/mlg/img1.jpg"
              class="w-full h-full object-cover"
              alt="bromo"
          /></swiper-slide>
          <!-- <div class="swiper-button-next" @click="swiper.slideNext()">next</div> -->
          <!-- <div class="swiper-button-prev" @click="swiper.slidePrev()">prev</div> -->
        </swiper>
      </figure>
    </div>
  </header>
  <main class="bg-white pt-6 mb-6">
    <div class="container flex gap-4">
      <div class="content w-3/4">
        <article class="">
          <div class="header mb-4">
            <h2 class="text-dark-blue">Bromo</h2>
            <p class="text-xl text-slate-600">Malang</p>
          </div>
          <div class="main text-slate-600">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              sapiente illo similique commodi fuga vitae alias, in doloremque,
              cumque temporibus laboriosam exercitationem! Dicta incidunt, a
              animi iusto fuga ex itaque voluptate obcaecati eius sed quos harum
              magni magnam debitis iure cumque dolores sapiente temporibus
              repellendus laborum pariatur veniam. Esse consectetur totam
              debitis non quidem iste officia facere at pariatur optio?
              Doloremque, eaque itaque quas ipsa labore corporis similique est
              officia repellat officiis natus illo? Doloremque itaque dicta
              voluptatum accusamus nihil provident eum natus corrupti ipsum ea,
              incidunt veniam nulla! Doloremque harum, reiciendis atque labore
              porro vel! Ex ducimus nihil vero magnam fugiat numquam quibusdam,
              perspiciatis recusandae est molestias cumque inventore in hic ea
              praesentium deleniti. Consectetur corrupti expedita aliquam illo
              harum at esse et, accusantium quo deleniti exercitationem
              perspiciatis excepturi laboriosam dolorem? Obcaecati, natus hic
              vitae eum, ipsam quasi molestias totam quas corrupti rem fuga
              facere quis possimus tempore. Itaque soluta incidunt provident
              laudantium inventore deleniti maiores, tenetur ex amet, nihil
              tempora quam molestias esse corrupti repellat harum sit odit
              delectus explicabo quibusdam? Iure magnam laboriosam eos
              repudiandae quibusdam sapiente quisquam velit inventore ducimus
              non praesentium reprehenderit incidunt, quas labore et possimus
              officiis nihil perferendis debitis quod minus corporis minima.
            </p>
          </div>
        </article>
      </div>
      <aside class="border-2 border-slate-400 rounded-lg w-1/4 py-5 px-4">
        Gallery of images
        <div class="gallery-images">...</div>
      </aside>
    </div>
  </main>
  <Footer />
</template>
<script>
import { Autoplay, Navigation } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Tour",
  components: {
    Navbar,
    Footer,

    Swiper,
    SwiperSlide,
    useSwiper,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const swiper = useSwiper();
    // masih ada proble pada navigation
    return {
      onSwiper,
      swiper,
      modules: [Autoplay, Navigation],
    };
  },
};
</script>
