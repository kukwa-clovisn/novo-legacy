<template>
  <section class="flex flex-col items-center p-8">
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Create an account
        </h1>
        <form class="space-y-4 md:space-y-6" method="POST">
          <div>
            <label
              for="name"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white text-left capitalize"
              >Your Full Name</label
            >
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Emelia Erickson"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 ml-1 text-sm font-medium text-gray-900 dark:text-white text-left capitalize"
              >Email</label
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
          <button
            type="submit"
            class="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Code
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?
            <a
              class="font-medium text-orange-600 hover:underline dark:text-orange-500"
              href="/signin"
              >Sign in here</a
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
