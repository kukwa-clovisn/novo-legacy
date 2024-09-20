<template>
  <div class="contact-container" id="contacts">
    <div class="contact-wrapper">
      <h1
        class="text-4xl sm:text-5xl text-green-600 dark:text-white font-extrabold tracking-tight"
      >
        Get in touch
      </h1>
      <p class="text-normal font-light text-gray-800 dark:text-gray-400">
        check us on social media.
      </p>

      <nav>
        <a
          href="https://linktr.ee/novolegacy"
          class="text-gray-800 hover:text-gray-500"
        >
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

        <a
          href="https://linktr.ee/novolegacy"
          class="text-gray-800 hover:text-gray-500"
        >
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .contact-wrapper {
    width: 80%;
    height: fit-content;

    h1 {
      padding: 20px;
      text-align: center;
      color: rgb(0, 0, 0);
    }
    p {
      text-align: center;
      font-size: 15px;
    }

    nav {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
}
</style>
