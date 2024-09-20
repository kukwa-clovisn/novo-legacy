<template>
  <footer>
    <div class="blur-wrapper"></div>
    <div class="wrapper">
      <img src="/novo-logo-small-transparent.png" alt="NOVO LEGACY" />
      <p class="text-sm leading-6 text-gray-300">
        Making trading look better to the world and a more profitable skill.
      </p>
      <nav>
        <a
          href="https://linktr.ee/novolegacy"
          class="text-gray-200 hover:text-gray-500"
        >
          <i class="fa-solid fa-link"></i>
          <span class="capitalize">check our media handles.</span>
        </a>
      </nav>
      <div class="text-gray-500">&copy;NOVO LEGACY</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: fit-content;
  padding: 20px;
  background: rgb(2, 92, 145);
  background: url("/novo-logo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  background-position: center center;

  .wrapper {
    width: 90%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    position: relative;

    img {
      height: 100px;
      width: auto;
      margin: 10px auto;
    }

    nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 40px;
      flex-wrap: wrap;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        gap: 4px;

        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
