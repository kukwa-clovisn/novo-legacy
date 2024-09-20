<script setup>
const modulesArr = ref([
  {
    state: false,
    title: "module tittle",
    description:
      "module descrition will come in here explanation the course section and any other extras that the course has to take in.",
  },
  {
    state: false,
    title: "module tittle",
    description:
      "module descrition will come in here explanation the course section and any other extras that the course has to take in.",
  },
  {
    state: false,
    title: "module tittle",
    description:
      "module descrition will come in here explanation the course section and any other extras that the course has to take in.",
  },
]);
</script>
<template>
  <div class="module-container">
    <div class="module-wrapper">
      <!-- component -->
      <div class="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
        <h1
          class="uppercase text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold"
        >
          course modules
        </h1>

        <div
          class="lg:w-8/12 w-full mx-auto"
          v-for="(mod, index) in modulesArr"
          :key="index"
        >
          <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

          <div class="w-full md:px-6">
            <div
              id="mainHeading"
              class="flex justify-between items-center w-full"
            >
              <div class="item">
                <p
                  class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"
                >
                  <span
                    class="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800"
                    >{{ index }}</span
                  >
                  {{ mod.title }}
                </p>
              </div>
              <button
                class="focus:outline-none"
                @click="mod.state = !mod.state"
              >
                <i class="fa-solid fa-caret-down text-3xl" v-if="mod.state"></i
                ><i class="fa-solid fa-caret-up text-3xl" v-else></i>
              </button>
            </div>
            <div
              id="menu"
              :class="[{ flex: mod.state }, 'mt-6', 'w-full']"
              v-if="mod.state"
            >
              <p
                class="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal"
              >
                {{ mod.description }}
              </p>
            </div>
          </div>

          <hr class="w-full lg:mt-10 my-8" />
        </div>
      </div>
    </div>
  </div>
</template>
