<script setup>
const showContent = ref(false);
const subscription = ref(true);
const drop = ref(false);
</script>
<template>
  <div class="checkout-container">
    <div class="wrapper">
      <div class="flex flex-col justify-center items-center min-h-screen">
        <div class="product rounded-lg shadow-lg p-6" v-if="subscription">
          <h1
            class="relative text-sm text-gray-500 font-medium flex justify-between mb-6 capitalize"
          >
            Payment Checkout
            <button
              class="relative hover:text-gray-700 px-4 py-1 capitalize"
              @click="($event) => (drop = !drop)"
            >
              other plans <i class="fa-solid fa-chevron-down ml-2"></i>
            </button>
            <ul v-if="drop">
              <li
                @click="
                  ($event) => ((subscription = !subscription), (drop = false))
                "
              >
                monthly
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
                  novo legacy vip yearly membership
                </h2>
                <p class="text-gray-700">Yearly subscription</p>
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
                  Exclusive private discord community with like minded traders.
                </li>
                <li>
                  Private videos sent out to you, explaining of a specific topic
                  you inquire or might struggle with.
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
            <span class="font-bold">$449.00</span>
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
            <PaypalButton />
          </div>
        </div>
        <div class="product rounded-lg shadow-lg p-6" v-else>
          <h1
            class="relative text-sm text-gray-500 font-medium flex justify-between mb-6 capitalize"
          >
            Payment Checkout
            <button
              class="relative hover:text-gray-700 px-4 py-1 capitalize"
              @click="($event) => (drop = !drop)"
            >
              other plans <i class="fa-solid fa-chevron-down ml-2"></i>
            </button>
            <ul v-if="drop">
              <li
                @click="
                  ($event) => ((subscription = !subscription), (drop = false))
                "
              >
                Yearly
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
                  novo legacy vip monthly membership
                </h2>
                <p class="text-gray-700">monthly subscription</p>
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
                  Exclusive private discord community with like minded traders.
                </li>
                <li>
                  Private videos sent out to you, explaining of a specific topic
                  you inquire or might struggle with.
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
            <span class="font-bold">$70.00</span>
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
            <PaypalButton />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkout-container {
  width: 100vw;
  height: fit-content;

  .wrapper {
    padding-top: 19vh;
    padding-bottom: 3vh;
    width: 80%;
    height: fit-content;
    margin: auto;
    padding: 20px 0;

    .product {
      width: 650px;
      background: white;
      box-shadow: 0 0 20px 1px rgb(199, 199, 199);
      img {
        width: 100px;
        height: auto;
        border-radius: 2px;
      }

      h1 {
        ul {
          width: fit-content;
          background: white;

          position: absolute;
          right: 2%;
          bottom: -200%;
          box-shadow: 0 0 10px 1px rgb(198, 198, 198);

          li {
            border-bottom: 1px solid rgb(208, 208, 208);
            font-size: 13px;
            padding: 10px 20px;
            cursor: pointer;
            display: block;
            z-index: 1;

            &:hover {
              background: whitesmoke;
              transform: scale(0.9);
            }
          }
        }

        @media screen and (max-width: 500px) {
          font-size: 11px;
        }
      }

      div ul {
        list-style-type: lower-roman;

        li {
          color: rgb(61, 61, 61);
          font-size: 13px;
          margin-bottom: 4px;
        }
      }
      @media screen and (max-width: 768px) {
        width: 100%;
        box-shadow: none;
      }
    }

    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
}
</style>
