<template>
  <div class="contact-container" id="contact">
    <div class="contact-wrapper">
      <h1
        data-aos="zoom-out"
        class="text-4xl sm:text-5xl text-green-600 dark:text-white font-extrabold tracking-tight"
      >
        Get in touch
      </h1>
      <img
        src="/novo-logo.jpg"
        style="
          height: 50px;
          width: auto;
          display: block;
          margin: 3px auto;
          border-radius: 10px;
        "
        alt=""
      />
      <p
        class="text-normal font-light text-gray-700 dark:text-gray-600 py-2"
        data-aos="zoom-out"
      >
        check us on social media.
      </p>

      <nav>
        <a
          href="https://linktr.ee/novolegacy"
          target="_blank"
          class="text-white hover:bg-gray-900 capitalize bg-orange-500 px-5 py-3 rounded"
        >
          <i class="fa-solid fa-link mr-2"></i>
          <span>view media handles</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  width: 100%;
  min-height: 50vh;
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
