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
      <!-- <div
        v-for="item in membership"
        :key="item.id"
        class="flex justify-center items-start"
      >
        <div v-if="item.view" class="product rounded-lg p-6">
          <div class="product-wrapper">
            <h1
              class="relative text-sm text-gray-500 font-medium flex justify-between mb-6 capitalize"
            >
              Payment Checkout
              <button
                class="relative hover:text-gray-700 px-4 py-1 capitalize"
                @click="($event) => subscriptionFunc()"
              >
                other plans <i class="fa-solid fa-chevron-right ml-2"></i>
              </button>
              <ul v-if="drop">
                <li>
                  {{ item.duration }}
                </li>
              </ul>
            </h1>
            <div class="flex justify-between mb-4">
              <div class="flex items-center">
                <img
                  src="/novo-logo.jpg"
                  alt="Product Image"
                  class="mr-4 h-18 w-18"
                />
                <div>
                  <h2 class="font-bold capitalize">
                    {{ item.type }}
                  </h2>
                  <p class="text-gray-700">{{ item.duration }} subscription</p>
                </div>
              </div>
            </div>

            <hr class="w-full my-7" />

            <div class="w-full md:px-6">
              <div
                id="mainHeading"
                class="flex justify-between items-center w-full"
              >
                <div>
                  <p
                    class="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800"
                  >
                    What you'll get from mentorship
                  </p>
                </div>
                <button
                  @click="($event) => (showContent = !showContent)"
                  class="focus:outline-none focus:ring-gray-800"
                >
                  <i
                    class="fa-solid fa-chevron-up text-2xl text-gray-500"
                    v-if="showContent"
                  ></i
                  ><i
                    class="fa-solid fa-chevron-down text-2xl text-gray-500"
                    v-else
                  ></i>
                </button>
              </div>
              <div class="mt-6 w-full transition" v-if="showContent">
                <ul>
                  <li>My analysis including my entry and exit points.</li>
                  <li>Live stream records, for playback if needed to.</li>
                  <li>
                    Exclusive private discord community with like minded
                    traders.
                  </li>
                  <li>
                    Private videos sent out to you, explaining of a specific
                    topic you inquire or might struggle with.
                  </li>
                  <li>Back test sessions.</li>

                  <li>Live trades.</li>

                  <li>Daily signals.</li>

                  <li>Weekly trade reviews.</li>

                  <li>Group zoom calls (Weekly analysis calls).</li>
                  <li>
                    You get to learn both my winning trade strategies which I've
                    developed.
                  </li>
                  <li>You will be allocated with an accountabiliy coach</li>

                  <li>
                    Course content, that includes everything you need to know to
                    become a profitable trader.
                  </li>

                  <li>24/7 support, to guide you on your trading journey.</li>
                </ul>
              </div>
            </div>
            <hr class="w-full my-7" />
            <div class="flex justify-between items-center">
              <span class="font-bold">Price:</span>
              <span class="font-bold">${{ item.price }}</span>
            </div>
            <hr class="w-full my-7" />
            <div>
              <p class="text-gray-500 mt-8">
                Enter Email to get updates from us.
              </p>
              <input
                type="email"
                name="email"
                id="email"
                class="border border-gray-300 rounded px-3 py-2 text-gray-700 my-2 text-sm w-full focus:outline-none outline-none"
                placeholder="Enter Email address..."
              />
            </div>
            <hr class="w-full my-5" />
            <div class="flex justify-center mt-6">
              <PaypalButton :price="price_value" />
            </div>
          </div>
          <div class="product-img">
            <img src="/novo-logo-small-transparent.png" alt="" />
          </div>
        </div>
      </div> -->
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
