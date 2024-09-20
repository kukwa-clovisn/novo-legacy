<template>
  <footer>
    <div class="blur-wrapper"></div>
    <div class="wrapper">
      <img src="/novo-logo-transparent.png" alt="NOVO LEGACY" />
      <p class="text-sm leading-6 text-gray-300">
        Making trading look better to the world and a more profitable skill.
      </p>
      <nav>
        <a href="#" class="text-gray-200 hover:text-gray-500">
          <svg
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Facebook</span>
        </a>

        <a href="#" class="text-gray-200 hover:text-gray-500">
          <svg
            class="h-8 w-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clip-rule="evenodd"
            />
          </svg>
          <span>YouTube</span>
        </a>
      </nav>
      <pre class="text-gray-200">

        &copy;NOVO LEGACY
      </pre>
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

  .wrapper {
    width: 90%;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 30px;
    flex-direction: column;
    position: relative;

    img {
      height: 70px;
      width: auto;
      margin: 20px auto;
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
