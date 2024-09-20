<template>
  <div class="pricing-container">
    <section
      class="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative overflow-hidden"
    >
      <div class="container">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span
                class="font-semibold text-lg text-blue-500 mb-2 block"
                data-aos="zoom-out"
              >
                Pricing Table
              </span>
              <h2
                data-aos="slide-up"
                class="font-bold text-3xl text-gray-900 sm:text-4xl md:text-[40px] mb-4"
              >
                Our Pricing Plan
              </h2>
              <p class="text-base text-body-color" data-aos="slide-up">
                Checkout the plan that best suits you and enroll to start your
                trading journey.
              </p>
            </div>
          </div>
        </div>
        <div class="items-div">
          <div class="item bg-white" data-aos="slide-right">
            <div class="img" data-aos="fade-in">
              <img src="/novo-logo.jpg" alt="NOVO LEGACY" />
            </div>
            <div class="relative">
              <span class="text-gray font-bold block mb-4">
                NOVO VIP MEMBERSHIP
              </span>
              <h2 class="font-bold text-dark mb-5 text-[32px]">
                $449.00
                <span class="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>

              <nuxt-link to="/store" class="bg-gray-200"> buy now </nuxt-link>
              <div>
                <span class="absolute right-0 top-7">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="item bg-gray-600" data-aos="slide-left">
            <div class="img" data-aos="fade-in">
              <img src="/novo-logo-small.jpg" alt="NOVO LEGACY" />
            </div>
            <div class="relative">
              <span
                class="text-white font-semibold text-lg block mb-4 capitalize"
              >
                NOVO legacy pack membership
              </span>
              <h2 class="font-bold text-white mb-5 text-[42px]">
                $70.00
                <span
                  class="text-gray-200 text-[15px] capilatize text-body-color font-medium"
                >
                  / month
                </span>
              </h2>

              <nuxt-link to="/store"> buy now </nuxt-link>
              <div>
                <span class="absolute right-0 top-7">
                  <svg
                    width="77"
                    height="172"
                    viewBox="0 0 77 172"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="86"
                        y1="0"
                        x2="86"
                        y2="172"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#3056D3" stop-opacity="0.09" />
                        <stop
                          offset="1"
                          stop-color="#C4C4C4"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ====== Pricing Section End -->
  </div>
</template>

<style lang="scss" scoped>
.pricing-container {
  width: 100%;
  height: fit-content;

  section {
    width: 70%;
    margin: auto;

    .items-div {
      width: 100%;
      height: fit-content;
      padding: 0;
      margin: auto;
      .item {
        width: 90%;
        height: 230px;
        border: none;
        border-radius: 3px;
        padding: 0px;
        margin: 20px auto;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        background: white;
        box-shadow: 0 0 3px 1px rgb(184, 184, 184);

        .img {
          width: 30%;
          height: 220px;
          background: black;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
        }

        .relative {
          padding: 40px 20px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          a {
            width: max-content;
            padding: 15px 23px;
            background: rgb(20, 20, 20);
            text-transform: uppercase;
            font-size: 12px;
            border-radius: 2px;
          }
          span,
          h2 {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
