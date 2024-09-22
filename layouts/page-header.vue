<script setup>
const isactive = useHeaderState();
const showMenuBar = showMenu();

if (process.client) {
  window.addEventListener("scroll", () => {
    isactive.value = true ? window.scrollY > 0 : false;
  });
}
</script>

<template>
  <header :class="[{ isactive: isactive }, 'animation']">
    <nav
      class="header-wrapper flex flex-wrap items-center justify-between bg-gray-100"
    >
      <button
        @click="($event) => (showMenuBar = !showMenuBar)"
        class="small-screen"
      >
        <i
          class="extra-small-screen fa-solid fa-align-left p-2 text-gray-900 text-3xl"
        ></i>
        <i class="x-sm fa-solid fa-align-right p-2 text-gray-900 text-3xl"></i>
      </button>
      <h1
        class="text-xl uppercase font-bold cursor-pointer"
        @click="($event) => navigateTo('/')"
      >
        -_-novo <span class="text-orange-500">legacy-_-</span>
      </h1>

      <div
        class="large-screen w-auto flex text-right text-bold mt-5 md:mt-0 border-none"
      >
        <nuxt-link to="/" class="block md:inline-block px-3 py-3 md:border-none"
          >Home
        </nuxt-link>
        <nuxt-link
          to="/#pricing"
          class="block md:inline-block px-3 py-3 md:border-none"
          >pricing
        </nuxt-link>
        <nuxt-link
          to="/#about"
          class="block md:inline-block px-3 py-3 md:border-none"
          >About us
        </nuxt-link>

        <nuxt-link
          to="/#contact"
          class="block md:inline-block px-3 py-3 md:border-none"
          >contact Us
        </nuxt-link>
      </div>
      <button
        @click="($event) => (showMenuBar = !showMenuBar)"
        class="large-screen"
      >
        <i class="fa-solid fa-bars-staggered text-gray-900 p-2 text-2xl"></i>
      </button>

      <nuxt-link
        to="/membership"
        class="extra-small-screen bg-orange-500 text-white px-7 py-2 text-sm rounded"
        >membership</nuxt-link
      >
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: white;

  .header-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: transparent;
    padding: 0px;
    z-index: 1;

    .small-screen,
    .x-sm {
      display: none;
    }

    @media screen and (max-width: 768px) {
      width: 90%;
      justify-content: space-between;
      margin: 0 auto;

      h1 {
        text-align: center;
      }
      .large-screen {
        display: none;
      }

      .small-screen {
        display: flex;
      }

      @media screen and (max-width: 450px) {
        justify-content: space-around;
        flex-direction: row-reverse;
        .extra-small-screen {
          display: none;
        }

        .x-sm {
          display: flex;
        }
      }
    }
  }
}

header.isactive {
  height: 10vh;
  background: white;
  box-shadow: 0 1px 40px 1px rgba(0, 0, 0, 0.455);

  .header-wrapper {
    width: 100%;
    box-shadow: none;
    justify-content: space-evenly;
  }
}
</style>
