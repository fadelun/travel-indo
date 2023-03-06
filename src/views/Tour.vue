<template>
  <header class="h-[340px] bg-dark-blue">
    <Navbar />
  </header>
  <main class="bg-white">
    <article
      class="container bg-white text-slate-500 border-2 border-slate-200 rounded-md absolute -top-40 left-0 right-0 p-8"
    >
      <header class="mb-8">
        <h2 class="text-dark-blue">Bromo</h2>
        <p class="text-xl">Malang</p>
        <figure>
          <img
            class="w-full h-[400px] object-cover object-center mt-5"
            src="../assets/images/mlg/img1.jpg"
            alt="boromo, malang"
          />
        </figure>
      </header>
      <section class="text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          natus possimus enim nesciunt beatae architecto dolorem deleniti
          nostrum explicabo nemo asperiores, a alias voluptas cupiditate id amet
          sed illo optio.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          natus possimus enim nesciunt beatae architecto dolorem deleniti
          nostrum explicabo nemo asperiores, a alias voluptas cupiditate id amet
          sed illo optio Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut enim labore eos libero ipsum nisi similique, sit nesciunt
          dicta, omnis, quas animi vitae iure iste est. Fugit maiores culpa
          aliquam, blanditiis natus est aliquid, illo ipsum quasi libero aut
          voluptatem consequatur, magni suscipit temporibus quis quam? Officia
          molestias architecto debitis ab voluptatem ex consequuntur ducimus
          deleniti est, illo quisquam necessitatibus assumenda nulla accusantium
          praesentium? Tempore rerum rem recusandae odio ullam fuga ad aliquid
          velit ducimus sed libero, doloremque suscipit dolore? Rem ex, possimus
          eligendi, at cum accusamus earum perspiciatis libero odit nihil sunt,
          praesentium adipisci molestiae vel assumenda iure quam?
        </p>
      </section>
    </article>
  </main>
  <Footer />
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Tour",
  components: {
    Navbar,
    Footer,
  },
};
</script>
