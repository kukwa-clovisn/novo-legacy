<template>
  <section class="flex flex-col items-center p-8">
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Welcome <span class="text-orange-500 font-bold">Again!</span>
        </h1>
        <form class="space-y-4 md:space-y-6" method="POST">
          <div>
            <label
              for="username"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white text-left capitalize"
              >email</label
            >
            <input
              type="email"
              name="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left capitalize ml-1"
              >Password</label
            >
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password..."
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required="true"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            login
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't yet have an account?
            <nuxt-link
              class="font-medium text-orange-600 hover:underline dark:text-orange-500"
              to="/signup"
              >Create Account</nuxt-link
            >
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section {
  background: url("../assets/orange-bg-2.jpeg");
  background-position: center;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 10vh;
}
</style>
