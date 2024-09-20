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

    <div class="menu-items flex flex-no-wrap">
      <div
        class="menu-lg sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex"
      >
        <div>
          <div
            @click="($event) => (navigateTo('/'), (showMenuBar = false))"
            class="w-full flex items-center justify-start border-b border-gray-700"
          >
            <img
              src="/novo-logo-small-transparent.png"
              alt="NOVO LEGACY"
              class="cursor-pointer"
            />
          </div>
          <nav @click="($event) => (showMenuBar = false)">
            <nuxt-link to="/" class="flex items-center">
              <i class="fa-solid fa-home"></i>
              home
            </nuxt-link>

            <nuxt-link to="/#mission" class="flex items-center">
              <i class="fa-solid fa-person"></i>
              about
            </nuxt-link>

            <nuxt-link to="/#contacts" class="flex items-center">
              <i class="fa-solid fa-phone"></i>
              contact us
            </nuxt-link>

            <nuxt-link to="/store" class="flex items-center-2">
              <i class="fa-solid fa-store"></i>
              store
            </nuxt-link>

            <nuxt-link to="/store/membership" class="flex items-center"
              ><i class="fa-brands fa-accessible-icon"></i>
              membership
            </nuxt-link>
          </nav>
        </div>
        <div class="px-2 border-t border-gray-700">
          <div class="w-full flex items-center justify-center bg-gray-800">
            <span class="cursor-pointer text-white pt-5 pb-3">
              <a
                href="https://linktr.ee/novolegacy"
                target="_blank"
                rel="noopener noreferrer"
                class="capitalize text-sm text-gray-400"
              >
                <i class="fa-solid fa-link mr-2"></i> Media handles</a
              >
            </span>
          </div>
        </div>
      </div>
      <div
        class="menu-sm w-64 h-full relative z-40 bg-gray-800 shadow md:h-fullflex flex-col justify-between sm:hidden transition duration-150 ease-in-out"
      >
        <div>
          <div
            @click="($event) => (navigateTo('/'), (showMenuBar = false))"
            class="w-full flex items-center justify-center"
          >
            <img
              src="/novo-logo-small-transparent.png"
              alt="NOVO LEGACY"
              class="cursor-pointer"
            />
          </div>
          <nav @click="($event) => (showMenuBar = false)">
            <nuxt-link to="/" class="flex items-center">
              <i class="fa-solid fa-home"></i>
              Home
            </nuxt-link>

            <nuxt-link to="/#mission" class="flex items-center"
              ><i class="fa-solid fa-person"></i>
              about
            </nuxt-link>

            <nuxt-link to="/#contacts" class="flex items-center">
              <i class="fa-solid fa-phone"></i>
              contact us
            </nuxt-link>

            <nuxt-link to="/store" class="flex items-center">
              <i class="fa-solid fa-store"></i>
              Store
            </nuxt-link>

            <nuxt-link to="/store/membership" class="flex items-center">
              <i class="fa-brands fa-accessible-icon"></i>
              membership
            </nuxt-link>
          </nav>
        </div>
        <div class="px-8 border-t border-gray-700">
          <div class="w-full flex items-center justify-center bg-gray-800">
            <span class="cursor-pointer text-white pt-5 pb-3">
              <a
                href="https://linktr.ee/novolegacy"
                target="_blank"
                rel="noopener noreferrer"
                class="capitalize text-sm text-gray-400"
              >
                <i class="fa-solid fa-link mr-2"></i> Media handles</a
              >
            </span>
          </div>
        </div>
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
  left: 0;
  z-index: 1;
  overflow: hidden;

  .blur-wrapper {
    cursor: pointer;
  }

  .menu-items {
    height: 100vh;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    .menu-lg {
      width: 27vw;
    }

    img {
      height: 100px;
      width: auto;
      margin: 20px auto;
    }

    nav {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      a {
        padding: 13px 10px;
        padding-left: 23px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 15px;
        width: 100%;
        color: white;
        font-size: 14px;
        text-transform: capitalize;
        i {
          min-width: 10%;

          font-size: 25px;
          text-transform: capitalize;
          color: rgba(56, 182, 255, 0.632);
        }

        &:hover {
          background: rgba(56, 182, 255, 0.188);
          transform: scale(0.99);
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100vw;

      .menu-sm {
        width: 100vw;
      }
    }
  }
}
</style>
