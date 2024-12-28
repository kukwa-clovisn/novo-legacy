<script setup>
const router = useRouter();

const user = reactive({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});

const loading = ref(false);
const success = ref(false);

async function handleFormSubmit() {
  try {
    loading.value = true;
    console.log(user);

    if (user.password === user.confirm_password) {
      success.value = true;
      router.push("/login");
      return;
    }

    window.confirm("are you sure u want to continue");
  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      success.value = false;
      loading.value = false;
    }, 3000);
  }
}
</script>
<template>
  <section class="flex flex-col items-center p-8" v-loading="loading">
    <div
      class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1
          class="text-xl font-bolder leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
        >
          Start Learning...
        </h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="handleFormSubmit">
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
              v-model="user.username"
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
              v-model="user.email"
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
              v-model="user.password"
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
              name="confirm_password"
              id="confirm_password"
              placeholder="Confirm Your Password..."
              class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required="true"
              v-model="user.confirm_password"
            />
          </div>
          <button
            type="submit"
            class="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?
            <nuxt-link
              class="font-medium text-orange-600 hover:underline dark:text-orange-500"
              to="/login"
              >Sign in here</nuxt-link
            >
          </p>
        </form>
      </div>
    </div>
    <div>
      <el-alert
        v-if="success"
        title="Success alert"
        type="success"
        description="More text description"
        show-icon
      />
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
