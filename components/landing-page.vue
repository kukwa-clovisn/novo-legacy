<template>
  <div class="landing-page bg-white">
    <div class="relative m-auto flex justify-start items-center flex-wrap">
      <img
        src="https://i.imgur.com/WbQnbas.png"
        alt="Leafs"
        class="small-screen w-full h-full object-contain sm:h-screen sm:w-4/12"
      />
      <div class="hero w-full sm:w-8/12 mb-10">
        <div class="container mx-auto h-full sm:p-10">
          <section class="container px-4 flex mt-5 items-center h-full lg:mt-0">
            <div class="container w-full">
              <h1 class="text-4xl lg:text-6xl font-bold capitalize">
                Find your
                <span class="text-orange-500 font-extrabold">perfect</span>
                trading
                <span class="text-orange-500 font-extrabold">mentorship</span>
              </h1>
              <div class="stroke w-20 h-2 bg-orange-500 my-4"></div>
              <p class="text-xl mb-10">
                Welcome to
                <span class="text-orange-400">Nova legacy</span> website. We aim
                to provide the best possible services for traders who wants to
                upskill their trading game. Beginner or experienced, start your
                journey.
              </p>
              <div
                class="buttons flex flex-wrap gap-4 justify-start items-center"
              >
                <nuxt-link
                  to="/membership"
                  data-aos="zoom-out"
                  class="bg-orange-500 text-white text-sm font-regular px-7 py-3 rounded shadow capitalize"
                >
                  <i class="fa-brands fa-accessible-icon mr-1"></i>
                  Get Membership
                </nuxt-link>
                <nuxt-link
                  data-aos="zoom-out"
                  to="/#contact"
                  class="bg-gray-900 lg:ml-5 text-white text-sm font-regular px-7 py-3 rounded shadow capitalize"
                  ><i class="fa-solid fa-phone mr-1"></i>
                  contact us
                </nuxt-link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <img
        src="https://i.imgur.com/WbQnbas.png"
        alt="Leafs"
        class="large-screen w-full h-full object-contain sm:h-screen sm:w-4/12"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing-page {
  padding-top: 10vh;

  .relative {
    width: 95%;
    margin: auto;

    .buttons a {
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .small-screen {
      display: none;
    }

    img {
      display: block;
      height: 70vh;
    }
    @media screen and (max-width: 800px) {
      .hero {
        position: relative;
        width: 80%;
        a {
          font-size: 15px;
        }
        @media screen and (max-width: 550px) {
          width: 95%;
          h1,
          p {
            text-align: center;
          }

          .stroke {
            margin: 15px auto;
            width: 100px;
            border-radius: 30px;
            height: 3px;
          }

          h1 {
            font-size: 26px;
          }
          .buttons {
            justify-content: center;

            a {
              font-size: 15px;
            }
          }
        }
      }

      .large-screen {
        display: none;
      }
      .small-screen {
        display: block;
      }

      img {
        position: absolute;
        top: auto;
        right: 0;
        height: 50vh;
        width: auto;
        object-fit: cover;
        opacity: 0.5;
      }
    }
  }

  @media screen and (max-width: 640px) {
    padding-top: 15vh;
  }
}
</style>
