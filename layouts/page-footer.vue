<template>
  <footer>
    <div class="blur-wrapper"></div>
    <div class="mt-20 xl:mt-32 mx-auto w-full relative text-center text-white">
      <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
          Ready to get your productivity back?<br />Start your membeship today.
        </h2>
        <nuxt-link
          to="/signup"
          class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-orange-500 rounded-full shadow-xl border border-transparent"
          >Get started</nuxt-link
        >
        <div class="mt-14 xl:mt-20">
          <nav
            class="flex flex-wrap justify-center text-lg font-medium text-gray-200"
          >
            <div class="px-5 py-2">
              <nuxt-link to="/">Home</nuxt-link>
            </div>
            <div class="px-5 py-2">
              <nuxt-link to="/#about">about us</nuxt-link>
            </div>
            <div class="px-5 py-2">
              <nuxt-link to="/#values">values</nuxt-link>
            </div>
            <div class="px-5 py-2">
              <nuxt-link to="/#contact">Contact</nuxt-link>
            </div>
            <div class="px-5 py-2">
              <nuxt-link to="/#membership">membership</nuxt-link>
            </div>
            <div class="px-5 py-2">
              <nuxt-link to="/#about">Privacy</nuxt-link>
            </div>
            <div class="px-5 py-2">
              <nuxt-link to="/">media links</nuxt-link>
            </div>
          </nav>
          <p class="mt-7 text-base text-gray-300">&copy;NOVOLEGACY</p>
        </div>
      </div>
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
}
</style>
