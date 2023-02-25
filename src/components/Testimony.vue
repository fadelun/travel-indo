<template>
  <!-- great testimoni -->
  <div id="testimony" class="content text-white">
    <div class="bg-[#00000098] pt-40 pb-36 w-full h-full">
      <div class="container flex gap-x-5">
        <div class="testimony-text w-1/2">
          <h2 class="font-extrabold text-6xl mb-10">
            Where Adventure and Relaxation Meet
          </h2>
          <p class="font-medium text-base">"{{ testi[0].quote }}"</p>
          <p class="font-medium text-base">
            -<i>{{ testi[0].name }}</i>
          </p>
        </div>
        <div class="testimony-videos w-1/2 gap-6 flex items-end justify-center">
          <div
            class="video w-60 relative hover:scale-110 duration-300 ease-in-out"
          >
            <img src="../assets/images/video.jpg" alt="beautiful beach" />

            <div
              class="icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-14 h-14 rounded-full border-4 flex justify-center items-center shadow-lg"
            >
              <font-awesome-icon icon="fa-solid fa-play" size="xl" />
            </div>
          </div>

          <div
            class="video w-60 relative hover:scale-110 duration-300 ease-in-out"
          >
            <img src="../assets/images/video-2.jpg" alt="bromo mountain" />
            <div
              class="icon absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-14 h-14 rounded-full border-4 flex justify-center items-center shadow-lg"
            >
              <font-awesome-icon icon="fa-solid fa-play" size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Testimony",

  setup() {
    const testi = ref([
      {
        name: "Samantha",
        quote:
          "I recently visited Indonesia and was blown away by the natural beauty of the country. The beaches, jungles, and mountains are truly breathtaking. The people are friendly and welcoming, and the food is delicious. I also enjoyed learning about the rich culture and history of Indonesia through visits to temples and museums. Overall, Indonesia is a must-visit destination for anyone who loves adventure, nature, and culture.",
      },
      {
        name: "Alex",
        quote:
          "Indonesia is an amazing country that offers so much to explore and discover. The diversity of landscapes, cultures, and traditions make it an incredible destination for travelers. I loved exploring the temples of Borobudur and Prambanan, snorkeling in the crystal-clear waters of the Komodo Islands, and trekking in the lush jungles of Kalimantan. The hospitality of the people and the delicious local cuisine made my trip even more enjoyable. I highly recommend visiting Indonesia for an unforgettable adventure.",
      },
      {
        name: "John William",
        quote:
          "If you want to experience a unique and unforgettable adventure, I highly recommend traveling to Indonesia. The natural beauty of the country, from the stunning beaches to the lush jungles, is truly breathtaking. The hospitality of the locals and the delicious food make it even more special.",
      },
    ]);

    return {
      testi,
    };
  },
};
</script>
<style></style>
