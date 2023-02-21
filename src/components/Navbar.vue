<template>
  <nav
    id="nav-2"
    class="container mx-auto pt-3 bg-transparent text-white absolute inset-x-0 top-0 z-50"
  >
    <div
      class="flex justify-between h-16 items-center border-b-2 border-b-white"
    >
      <div class="logo w-24">
        <a href="#"> LOGO </a>
      </div>
      <div class="menu w-2/6 flex justify-between font-light">
        <a href="#">Home</a><a href="#">About</a><a href="#">Tours</a
        ><a href="#">Gallery</a>
        <a href="#">Contacts</a>
      </div>
      <div class="button grid items-center">
        <button>
          <img src="@/assets/icons/search.svg" alt="search-icon" />
        </button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style lang=""></style>
