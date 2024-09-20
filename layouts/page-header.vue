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
  <header :class="{ isactive: isactive }">
    <div class="header-wrapper">
      <div class="logo">
        <img src="/novo-logo-transparent.png" alt="NOVO LEGACY" />
      </div>
      <nav>
        <a href="/">home</a>

        <a href="/">about</a>
        <a href="/#contacts">contact us</a>
      </nav>
      <button class="hide-sm" @click="($event) => (showMenuBar = !showMenuBar)">
        <i class="fa-solid fa-bars mr-3"></i>
      </button>
      <div class="checkins">
        <nuxt-link to="/store">
          <i class="fa-solid fa-store mr-2"></i> store</nuxt-link
        >
        <nuxt-link to="/store/cart"
          ><i class="fa-solid fa-cart-shopping mr-2"></i>cart</nuxt-link
        >
      </div>
      <button class="show-sm" @click="($event) => (showMenuBar = !showMenuBar)">
        <i class="fa-solid fa-bars mr-3"></i>
      </button>
    </div>
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
  background: linear-gradient(to right, rgb(9, 9, 9), rgb(56, 182, 255));

  .header-wrapper {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 0;
    .logo {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid rgb(237, 237, 237);

      img {
        height: 100%;
        width: auto;
        object-fit: contain;
        margin: auto;
        cursor: pointer;
        display: block;
      }
    }

    nav {
      min-width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      a {
        text-transform: capitalize;
        color: white;
      }
    }

    button {
      width: fit-content;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      outline: none;
      border: none;

      i {
        color: white;
        font-size: 35px;
      }
    }
    .show-sm {
      display: none;
    }

    .checkins {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        min-width: 100px;
        font-size: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        font-weight: 500;
        color: rgb(255, 255, 255);
      }
    }

    @media screen and (max-width: 768px) {
      justify-content: space-between;
      nav,
      .hide-sm {
        display: none;
      }

      .checkins {
        min-width: 65%;

        @media screen and (max-width: 360px) {
          font-size: 14px;
        }
      }

      .show-sm {
        display: flex;
      }
    }
  }
}

header.isactive {
  height: 10vh;
  box-shadow: 0 3px 40px 1px rgb(64, 64, 64);

  .header-wrapper {
    width: 100%;
    box-shadow: none;
    justify-content: space-evenly;
  }
}
</style>
