<template>
  <main class="text-white bg-[#070416] py-24">
    <div class="container">
      <div class="content">
        <h2 class="font-bold text-4xl mx-auto w-fit mb-12">POPULAR TOURS</h2>

        <!-- menu-cards -->
        <ul class="menu-tour flex flex-wrap justify-between">
          <li
            class="card relative w-[200px] h-[260px] rounded-md border-2 border-white"
          >
            <div class="card-image h-full">
              <img
                :src="require(`@/assets/images/bdg/kebun.jpg`)"
                alt=""
                srcset=""
                class="object-center object-cover h-full"
              />
            </div>
            <div
              class="title text-center absolute inset-x-0 bottom-0 h-1/4 bg-[#0000006c]"
            >
              <h3 class="text-xl">Tour 1</h3>
              <p class="text-sm">There will be small text</p>
            </div>
          </li>
          <li
            class="card relative w-[200px] h-[260px] rounded-md border-2 border-white"
          >
            <div class="card-image h-full">
              <img
                :src="require(`@/assets/images/bdg/kebun.jpg`)"
                alt=""
                srcset=""
                class="object-center object-cover h-full"
              />
            </div>
            <div
              class="title text-center absolute inset-x-0 bottom-0 h-1/4 bg-[#0000006c]"
            >
              <h3 class="text-xl">Tour 1</h3>
              <p class="text-sm">There will be small text</p>
            </div>
          </li>
          <li
            class="card relative w-[200px] h-[260px] rounded-md border-2 border-white"
          >
            <div class="card-image h-full">
              <img
                :src="require(`@/assets/images/bdg/kebun.jpg`)"
                alt=""
                srcset=""
                class="object-center object-cover h-full"
              />
            </div>
            <div
              class="title text-center absolute inset-x-0 bottom-0 h-1/4 bg-[#0000006c]"
            >
              <h3 class="text-xl">Tour 1</h3>
              <p class="text-sm">There will be small text</p>
            </div>
          </li>
          <li
            class="card relative w-[200px] h-[260px] rounded-md border-2 border-white"
          >
            <div class="card-image h-full">
              <img
                :src="require(`@/assets/images/bdg/kebun.jpg`)"
                alt=""
                srcset=""
                class="object-center object-cover h-full"
              />
            </div>
            <div
              class="title text-center absolute inset-x-0 bottom-0 h-1/4 bg-[#0000006c]"
            >
              <h3 class="text-xl">Tour 1</h3>
              <p class="text-sm">There will be small text</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";

export default {
  name: "Main",
  setup() {
    const source = ref("@/assets/images");

    return {
      source,
    };
  },
};
</script>
<style></style>
