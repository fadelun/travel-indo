<template>
  <nav id="nav-2" class="bg-transparent border-b-2 border-b-white text-white">
    <div class="flex justify-between h-16 items-center px-16 md:px-24">
      <div class="logo w-24">
        <a href="#"> LOGO </a>
      </div>
      <div class="menu w-2/6 flex justify-between font-light">
        <a href="#">Home</a><a href="#">About</a><a href="#">Tours</a
        ><a href="#">Gallery</a>
        <a href="#">Contacts</a>
      </div>
      <div class="button w-32 grid items-center">
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
