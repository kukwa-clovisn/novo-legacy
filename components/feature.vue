<template>
  <section
    id="values"
    class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20"
  >
    <div
      class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"
    >
      <h2
        data-aos="zoom-out"
        class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-orange-500"
      >
        values
      </h2>

      <p
        data-aos="slide-up"
        class="max-w-[85%] leading-normal text-muted-foreground text-left sm:text-lg sm:leading-7"
      >
        The product can personalize user experiences by understanding individual
        preferences and tailoring recommendations or content based on user
        behavior and historical data.
      </p>
    </div>

    <div
      class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3"
    >
      <div
        data-aos="zoom-in"
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
      >
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          <div class="flex justify-start items-center gap-3" data-aos="zoom-in">
            <i
              class="fa-solid fa-star text-orange-500"
              v-for="i in 5"
              :key="i"
            ></i>
          </div>

          <div class="space-y-2">
            <h3 class="font-bold capitalize text-left">flexibility</h3>
            <p class="text-sm text-muted-foreground text-left">
              We have flexible study hours that will help you learn at your own
              pace and at your own convenience.
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
      >
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          <div class="flex justify-start items-center gap-3">
            <i
              class="fa-solid fa-star text-orange-500"
              v-for="i in 5"
              :key="i"
            ></i>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold capitalize text-left">determination</h3>
            <p class="text-sm text-muted-foreground text-left">
              We're bent on seeing you succeed through our mentorship no matter
              the odds.
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
      >
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          <div class="flex justify-start items-center gap-3">
            <i
              class="fa-solid fa-star text-orange-500"
              v-for="i in 5"
              :key="i"
            ></i>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold capitalize text-left">accountability</h3>
            <p class="text-sm text-muted-foreground text-left">
              We ensure that each and every step of the way is well accounted
              for and on track.
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
      >
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          <div class="flex justify-start items-center gap-3">
            <i
              class="fa-solid fa-star text-orange-500"
              v-for="i in 5"
              :key="i"
            ></i>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold capitalize text-left">intentionality</h3>
            <p class="text-sm text-muted-foreground text-left">
              We're here to help you succeed so we go above and beyond our
              limits and comfort to ensure that you succeed.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
      >
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          <div class="flex justify-start items-center gap-3">
            <i
              class="fa-solid fa-star text-orange-500"
              v-for="i in 5"
              :key="i"
            ></i>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold capitalize text-left">reliability</h3>
            <p class="text-sm text-muted-foreground text-left">
              We're bent on seeing you succeed through our mentorship no matter
              the odds.
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2"
      >
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
          <div class="flex justify-start items-center gap-3">
            <i
              class="fa-solid fa-star text-orange-500"
              v-for="i in 5"
              :key="i"
            ></i>
          </div>
          <div class="space-y-2">
            <h3 class="font-bold capitalize text-left">accountability</h3>
            <p class="text-sm text-muted-foreground text-left">
              We ensure that each and every step of the way is well accounted
              for and on track.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
