<template>
  <main>
    <LandingPage />
    <chart />
    <About />
    <Mission />
    <Expect />
    <Feature />
    <pricing />

    <div class="mission-container bg-orange-300" id="mission">
      <div class="wrapper" data-aos="slide-left">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div>
              <div
                data-aos="zoom-out"
                class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-bold text-gray-900 text-left">
                  Mission
                </h3>
                <p class="mt-2 text-gray-800 text-left">
                  We aim to make the world a better place through innovation and
                  collaboration.
                </p>
              </div>
            </div>
            <div>
              <div
                data-aos="zoom-out"
                class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-bold text-gray-900 text-left">
                  Values
                </h3>
                <p class="mt-2 text-gray-800 text-left">
                  We believe in honesty, integrity, and respect for all
                  individuals.
                </p>
              </div>
            </div>
            <div>
              <div
                data-aos="zoom-out"
                class="flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div class="mt-5">
                <h3 class="text-lg font-bold text-gray-900 text-left">
                  Vision
                </h3>
                <p class="mt-2 text-gray-800 text-left">
                  We envision a world where trading is handled with mastery and
                  professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Team />
    <div class="picture h-3/4 w-full flex flex-col justify-center gap-2">
      <div class="blur-wrapper"></div>
      <h1 class="text-center text-3xl capitalize text-white relative">
        Be a trader with class
      </h1>
      <nuxt-link
        to="/login"
        class="w-fit px-5 py-2 bg-orange-500 text-white capitalize m-auto relative"
        >Join Membership</nuxt-link
      >
    </div>
    <Testimonials />
    <contact />
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;

  .mission-container {
    width: 100%;
    min-height: 50vh;
    margin: 20px auto;

    .wrapper {
      width: 80%;
      height: fit-content;
      margin: auto;
      padding: 40px 0;

      h1 {
        padding: 10px;
        font-size: 45px;
        text-align: left;
        text-transform: uppercase;
        color: black;
      }

      p {
        text-align: left;
        font-size: 16px;
      }
    }
  }

  .picture {
    min-height: 70vh;
    background: url("../assets/man-trading.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    justify-content: center;
  }
}
</style>
