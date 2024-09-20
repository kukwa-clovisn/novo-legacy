<script setup>
const showContent = ref(false);
</script>
<template>
  <div class="checkout-container">
    <div class="wrapper">
      <div class="product border-t border-gray-50">
        <div class="image">
          <img
            src="/novo-logo.jpg"
            alt="Black Leather Purse"
            class="h-full object-center object-cover md:block hidden"
          />
          <img
            src="/novo-logo.jpg"
            alt="Black Leather Purse"
            class="md:hidden w-full h-full object-center object-cover"
          />
        </div>
        <div class="details">
          <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">#1</p>

          <h2 class="text-base font-black leading-none text-gray-800">
            novo yearly vip menbership
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nisi
            repellendus cum beatae rerum mollitia at tempora fugit quis iure
            eligendi ipsam magni nesciunt eius, sunt architecto cumque, sit
            doloribus.
          </p>
          <div class="flex items-center justify-between pt-5 mb-2">
            <p
              class="text-xs leading-3 text-gray-800 cursor-pointer bg-gray-200 py-2 px-4 capitalize"
            >
              Add to cart <i class="fa-solid fa-cart"></i>
            </p>
          </div>
          <div class="border-t">
            <div class="font-semibold py-6 text-sm uppercase">
              <span>Price: </span><span>$600</span>
            </div>
            <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-4" />

            <div class="w-full md:px-6 mb-4">
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
                    class="fa-solid fa-circle-chevron-up text-3xl"
                    v-if="showContent"
                  ></i
                  ><i
                    class="fa-solid fa-circle-chevron-down text-3xl"
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
            <hr class="w-full lg:mt-10 md:mt-12 md:mb-8 my-4" />
            <div class="checkout-button">
              <PaypalButton />
            </div>
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
    width: 80%;
    height: fit-content;
    margin: auto;
    padding: 20px 0;

    .product {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;

      .image {
        width: 50%;
        height: fit-content;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        img {
          width: 100%;
          max-height: 70vh;
          object-fit: contain;
        }
      }
      .details {
        width: 50%;
        height: fit-content;

        h2 {
          font-size: 30px;
          padding: 10px 0;
          text-transform: capitalize;
        }
        ul {
          width: 100%;
          height: fit-content;
          list-style-type: circle;

          li {
            padding: 10px;
            color: black;
          }
        }
      }
    }
  }
}
</style>
