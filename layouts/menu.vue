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
        class="menu menu-lg sm:relative bg-gray-800 shadow md:h-full flex-col justify-between sm:flex"
      >
        <div
          @click="($event) => (navigateTo('/'), (showMenuBar = false))"
          class="logo w-full flex items-center justify-start border-b border-gray-700"
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

        <div class="link px-2 border-t border-gray-700">
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
        class="menu menu-sm h-full relative z-40 bg-gray-800 md:h-full flex-col justify-between transition duration-150 ease-in-out border-5 border-red-600"
      >
        <div
          @click="($event) => (navigateTo('/'), (showMenuBar = false))"
          class="logo w-full flex items-center justify-center"
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

        <div class="link px-8 border-t border-gray-700">
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
    padding: 0;

    .menu {
      height: 100vh;
      .logo {
        height: 25vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 10px 9px 19px 3px white;

        img {
          height: 80%;
          width: auto;
          object-fit: contain;
        }
      }

      nav {
        width: 100%;
        height: 65vh;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        overflow: hidden;
        overflow-y: scroll;
        background: rgb(35, 45, 61);
        padding-top: 20px;

        a {
          padding: 2px 10px;
          padding-left: 35px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 12px;
          width: 100%;
          min-height: 65px;
          color: white;
          font-size: 16px;
          text-transform: capitalize;
          i {
            min-width: 10%;

            font-size: 27px;
            text-transform: capitalize;
            color: rgba(56, 182, 255, 0.632);
          }
        }
      }
      .link {
        height: 10vh;
      }
    }

    .menu-lg {
      width: 27vw;
      overflow: hidden;

      @media screen and (max-width: 900px) {
        width: 35vw;

        @media screen and (max-width: 768px) {
          width: 50vw;
          @media screen and (max-width: 600px) {
            width: 60vw;
            @media screen and (max-width: 500px) {
              width: 70vw;
            }
          }
        }
      }
    }

    .menu-sm {
      display: none;
    }

    @media screen and (max-width: 400px) {
      width: 100vw;
      .menu-lg {
        display: none;
      }
      .menu-sm {
        width: 100vw;
        display: flex;
        justify-content: space-between;

        nav a {
          font-size: 19px;

          i {
            font-size: 25px;
          }
        }
      }
    }
  }
}
</style>
