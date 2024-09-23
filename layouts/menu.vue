<script setup>
const showMenuBar = showMenu();
</script>
<template>
  <div class="menu-container">
    <div
      class="blur-wrapper"
      data-aos="slide-right"
      @click="($event) => (showMenuBar = !showMenuBar)"
    ></div>

    <div
      class="fixed top-0 left-0 flex bg-white flex-col justify-between w-64 h-full bg-white"
    >
      <div
        class="logo relative flex flex-col items-center justify-center h-1/4"
        @click="($event) => (navigateTo('/'), (showMenuBar = false))"
      >
        <button class="p-2 absolute right-2 top-1">
          <i class="fa-solid fa-xmark text-2xl text-gray-400"></i>
        </button>
        <img
          src="/novo-logo.jpg"
          style="height: 60%; width: auto; object-fit: contain; margin: auto"
          alt="Novo Legacy"
          class="rounded-full"
        />
        <h1 class="text-center uppercase font-bold py-3">&copy;novo legacy</h1>
      </div>
      <div class="menu-items bg-gray-200 flex flex-col flex-1 overflow-y-auto">
        <nav class="flex-1 px-2 py-4">
          <nuxt-link
            to="/"
            @click="($event) => (showMenuBar = false)"
            class="flex items-center gap-3 px-4 py-3 capitalize text-gray-800 hover:border-l-[5px] hover:border-orange-500 hover:text-orange-500 hover:font-bold"
          >
            <i class="fa-solid fa-home text-gray-600"></i>
            home
          </nuxt-link>
          <nuxt-link
            @click="($event) => (showMenuBar = false)"
            to="/#values"
            class="flex items-center gap-3 px-4 py-3 capitalize text-gray-800 hover:border-l-[5px] hover:border-orange-500 hover:text-orange-500 hover:font-bold"
          >
            <i class="fa-solid fa-tags text-gray-600"></i>

            values
          </nuxt-link>
          <nuxt-link
            @click="($event) => (showMenuBar = false)"
            to="/#about"
            class="flex items-center gap-3 px-4 py-3 capitalize text-gray-800 hover:border-l-[5px] hover:border-orange-500 hover:text-orange-500 hover:font-bold"
          >
            <i class="fa-solid fa-quote-left text-gray-600"></i>
            about
          </nuxt-link>
          <nuxt-link
            @click="($event) => (showMenuBar = false)"
            to="/#membership"
            class="flex items-center gap-3 px-4 py-3 capitalize text-gray-800 hover:border-l-[5px] hover:border-orange-500 hover:text-orange-500 hover:font-bold"
          >
            <i class="fa-brands fa-accessible-icon text-gray-600"></i>
            membership
          </nuxt-link>
          <nuxt-link
            @click="($event) => (showMenuBar = false)"
            to="/checkout"
            class="flex items-center gap-3 px-4 py-3 capitalize text-gray-800 hover:border-l-[5px] hover:border-orange-500 hover:text-orange-500 hover:font-bold"
          >
            <i class="fa-solid fa-comments-dollar text-gray-600"></i>

            checkout
          </nuxt-link>

          <nuxt-link
            @click="($event) => (showMenuBar = false)"
            to="/#contact"
            class="flex items-center gap-3 px-4 py-3 capitalize text-gray-800 hover:border-l-[5px] hover:border-orange-500 hover:text-orange-500 hover:font-bold"
          >
            <i class="fa-solid fa-phone text-gray-600"></i>
            contact us
          </nuxt-link>
        </nav>
      </div>
      <div class="link">
        <a
          @click="($event) => (showMenuBar = false)"
          class="text-gray-700 text-center capitalize py-3 w-full flex items-center justify-center text-sm"
          href="/"
          ><i class="fa-solid fa-link mr-1"></i> media links</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  margin: 0;
  padding: 0;
  left: 0;
  z-index: 1 !important;
  overflow: hidden;

  .blur-wrapper {
    cursor: pointer;
  }

  .logo {
    height: 25vh;
  }
  .menu-items {
    height: 65vh;
  }

  .link {
    height: 10vh;
  }

  @media screen and (max-width: 500px) {
    .w-64 {
      width: 100%;

      nav a {
        font-size: 19px;
        padding: 10px auto;
      }
    }
  }
}
</style>
