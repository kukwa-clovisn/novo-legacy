<script setup>
const showContent = ref(false);
const subscription = ref(true);
const drop = ref(false);
const price_value = ref(0);

const membership = ref([
  {
    id: 1,
    view: true,
    type: "novo legacy vip yearly membership",
    price: 449,
    duration: "yearly",
  },
  {
    id: 2,
    view: false,
    type: "novo legacy vip monthly membership",
    price: 70,
    duration: "monthly",
  },
]);

function subscriptionFunc() {
  for (let i = 0; i < membership.value.length; i++) {
    membership.value[i].view = !membership.value[i].view;
  }
}
</script>
<template>
  <div class="checkout-container">
    <div class="wrapper">
      <div
        class="flex-col md:flex-row justify-center flex gap-4 items-start mx-4 py-12"
      >
        <div
          class="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row"
        >
          <div class="relative w-full md:w-48 flex justify-center items-center">
            <img
              src="~/assets/candle-sticks.jpg"
              alt="shopping image"
              class="object-cover w-full h-48 md:h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <form class="flex-auto p-6">
            <div class="flex flex-wrap">
              <h1
                class="flex-auto text-sm font-semibold dark:text-gray-50 uppercase"
              >
                novo legacy vip membership
              </h1>
              <div
                class="text-xl font-semibold text-gray-700 dark:text-gray-200"
              >
                $449.00
              </div>
              <div
                class="flex-none w-full mt-2 text-sm font-medium text-gray-500 dark:text-gray-300"
              >
                /year
              </div>
            </div>

            <div class="flex mb-4 text-sm font-medium">
              <PaypalButton />
            </div>
          </form>
        </div>
      </div>
    </div>
    <Contact />
  </div>
</template>

<style lang="scss" scoped>
.checkout-container {
  width: 100vw;
  height: fit-content;
  background: white;
  padding-top: 17vh;
  padding-bottom: 5vh;
  .wrapper {
    width: 100%;
    height: fit-content;
    margin: auto;

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
}
</style>
