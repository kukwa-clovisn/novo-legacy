<template>
  <div class="chart-container">
    <div class="chart-wrapper">
      <h1
        class="text-center text-xl font-bold capitalize text-gray-700"
        data-aos="zoom-out"
      >
        Become a First Class
        <span class="text-orange-500 font-bolder">IT expert.</span>
      </h1>
      <p class="w-4/4 text-center" data-aos="zoom-out">
        Join our next training batch and let us walk you through the process of
        becoming a
        <span>first class IT expert</span>
        <br />
        The last opportunity you had has was yesterday, the next is now...
        <nuxt-link
          data-aos="slide-up"
          to="/checkout"
          class="bg-gray-900 text-white w-fit px-7 py-3 mt-6 m-auto flex items-center justify-center cursor-pointer rounded uppercase font-medium"
          >start now <i class="fa-solid fa-pointer"></i
        ></nuxt-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
  height: fit-content;
  margin: 20px auto;

  .chart-wrapper {
    width: 100%;
    height: fit-content;
    margin: auto;

    h1 {
      font-size: 40px;
      //font-family: "JetBrains Mono", monospace;
      padding: 20px;
      padding-top: 50px;
    }

    p {
      width: 80%;
      margin: auto;
      // font-family: "JetBrains Mono", monospace;
    }

    .chart {
      height: 70vh;
      width: 70vw;
      margin: 20px auto;
      border-radius: 15px;
      border: 15px groove teal;
    }
  }
}
</style>
