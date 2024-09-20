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
          <div class="h-25 w-full flex items-center justify-start">
            <img
              src="/novo-logo-small-transparent.png"
              class="w-13 h-13"
              alt="NOVO LEGACY"
            />
          </div>
          <ul class="mt-12" @click="($event) => (showMenuBar = false)">
            <li
              @click="($event) => navigateTo('/')"
              class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
            >
              <nuxt-link
                to="/"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-grid"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                </svg>
                <span class="text-sm ml-2">home</span>
              </nuxt-link>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/#mission')"
              class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
            >
              <a
                href="/#mission"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="text-sm ml-2">about</span>
              </a>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/#contacts')"
              class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
            >
              <a
                href="/#contacts"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i class="fa-solid fa-phone mr-2"></i>
                <span class="text-sm ml-2">contact us</span>
              </a>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/store')"
              class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
            >
              <nuxt-link
                to="/store"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-puzzle"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path
                    d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                  ></path>
                </svg>
                <span class="text-sm ml-2">store</span>
              </nuxt-link>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/store/cart')"
              class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
            >
              <nuxt-link
                to="/store/cart"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                ><i class="fa-solid fa-cart-shopping"></i>
                <span class="text-sm ml-2">cart</span>
              </nuxt-link>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="px-8 border-t border-gray-700">
          <ul class="w-full flex items-center justify-center bg-gray-800">
            <li class="cursor-pointer text-white pt-5 pb-3">
              <a
                href="https://linktr.ee/novolegacy"
                target="_blank"
                rel="noopener noreferrer"
                class="capitalize text-sm text-gray-400"
              >
                <i class="fa-solid fa-link mr-2"></i> Media handles</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div
        class="menu-sm w-64 h-full relative z-40 bg-gray-800 shadow md:h-fullflex flex-col justify-between sm:hidden transition duration-150 ease-in-out"
      >
        <div>
          <div class="h-25 w-full flex items-center justify-center">
            <img src="/novo-logo-small-transparent.png" alt="NOVO LEGACY" />
          </div>
          <ul class="mt-12" @click="($event) => (showMenuBar = false)">
            <li
              @click="($event) => navigateTo('/')"
              class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
            >
              <nuxt-link
                to="/"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i class="fa-solid fa-home"></i>
                <span class="text-sm ml-2">Home</span>
              </nuxt-link>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/#mission')"
              class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
            >
              <a
                href="/#mission"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                ><i class="fa-solid fa-person"></i>
                <span class="text-sm ml-2">about</span>
              </a>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/#contacts')"
              class="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6"
            >
              <a
                href="/#contacts"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i class="fa-solid fa-phone mr-2"></i>
                <span class="text-sm ml-2">contact us</span>
              </a>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/store')"
              class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
            >
              <nuxt-link
                to="/store"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i class="fa-solid fa-store"></i>
                <span class="text-sm ml-2">Store</span>
              </nuxt-link>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
            <li
              @click="($event) => navigateTo('/store')"
              class="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6"
            >
              <nuxt-link
                to="/store/cart"
                class="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                <i class="fa-solid fa-cart-shopping"></i>
                <span class="text-sm ml-2">cart</span>
              </nuxt-link>
              <div
                class="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs"
              >
                <i class="fa-solid fa-caret-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="px-8 border-t border-gray-700">
          <ul class="w-full flex items-center justify-center bg-gray-800">
            <li class="cursor-pointer text-white pt-5 pb-3">
              <a
                href="https://linktr.ee/novolegacy"
                target="_blank"
                rel="noopener noreferrer"
                class="capitalize text-sm text-gray-400"
              >
                <i class="fa-solid fa-link mr-2"></i> Media handles</a
              >
            </li>
          </ul>
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
      width: 45vw;
    }

    img {
      height: 200px;
      width: auto;
    }

    ul {
      width: 100%;
      height: fit-content;
      li {
        padding: 20px;
        min-height: 70px;
        margin: 0;
        border-top: 1px solid rgb(37, 60, 95);
        a {
          display: flex;
          height: 100%;
          i,
          span {
            font-size: 25px;
            text-transform: capitalize;
          }
        }
        div i {
          font-size: 21px;
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
