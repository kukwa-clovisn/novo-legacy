<template>
  <main>
    <div class="landing-page">
      <div class="landing-page-wrapper">
        <div class="blur-wrapper"></div>
        <div class="hero">
          <div class="hero-wrapper">
            <h1>novo legacy</h1>
            <p>
              Welcome to Nova legacy website. We aim to provide the best
              possible services for traders who wants to upskill their trading
              game. Beginner or experienced, start your journey.
            </p>
            <div class="hero-buttons">
              <nuxt-link to="/" data-aos="zoom-out"
                >mentorship plans <i class="fa-solid fa-arrow-down ml-2"></i
              ></nuxt-link>
              <nuxt-link to="/" data-aos="zoom-out"
                >get started<i class="fa-solid fa-arrow-down ml-2"></i
              ></nuxt-link>
            </div>
          </div>
        </div>
        <div class="hero-section">
          <div class="wrapper">
            <img src="/novo-logo-transparent.png" alt="" />
          </div>
        </div>
      </div>
    </div>

    <courseOutline />
    <pricing />

    <div class="mission-container">
      <div class="wrapper">
        <h1 class="text-gray-700 font-bold" data-aos="slide-up">our mission</h1>
        <p data-aos="slide-up">
          Our mission is to transform the trading experience through innovation,
          expertise, and a client-first approach. <br />
          We are dedicated to harnessing the power of advanced technology and
          deep market insights to provide unparalleled trading solutions that
          drive success and growth for our clients.<br /><br />
          By prioritizing transparency, integrity, and personalized service, we
          strive to empower our clients to make informed decisions and achieve
          their financial goals with confidence and efficiency.
        </p>
      </div>
    </div>

    <contact />
  </main>
</template>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;

  .landing-page {
    width: 100%;
    height: fit-content;
    background: linear-gradient(to right, rgb(9, 9, 9), rgb(56, 182, 255));
    position: relative;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    .landing-page-wrapper {
      width: 100%;
      height: fit-content;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;
      padding-top: 6vh;
      position: relative;

      .blur-wrapper {
        display: none;
      }

      .hero {
        width: 55%;
        height: fit-content;
        position: relative;
        margin: 20px auto;

        h1 {
          font-size: 70px;
          font-weight: 800;
          text-transform: uppercase;
          color: rgb(255, 255, 255);
          text-align: center;
          padding: 20px 0;
          text-align: left;
          font-family: "Poppins", sans-serif;

          @media screen and (max-width: 1100px) {
            font-size: 60px;
            padding: 10px 0;

            @media screen and (max-width: 925px) {
              font-size: 50px;
            }
          }
        }

        P {
          color: white;
          width: 90%;
          text-align: left;
          padding: 10px 0;
          font-size: 15px;
          font-weight: 300;
          margin-left: 0;
          font-family: "Poppins", sans-serif;
        }

        .hero-buttons {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 30px;
          margin: 20px auto;

          a {
            min-width: 200px;
            height: 50px;
            padding: 3px 15px;
            color: rgb(19, 19, 19);
            border-radius: 1px;
            background: rgb(56, 182, 255);
            text-transform: capitalize;
            display: flex;
            justify-content: center;
            align-items: center;

            &:last-child {
              background: transparent;
              color: rgb(255, 255, 255);
              border: 1px solid rgb(255, 255, 255);
            }

            @media screen and (max-width: 886px) {
              font-size: 15px;
              min-width: 150px;
            }
          }
        }
      }
      .hero-section {
        width: 45%;
        height: 100%;

        .wrapper {
          width: 100%;
          height: fit-content;

          img {
            width: 100%;
            height: auto;
            margin: auto;
          }
        }
      }

      @media screen and (max-width: 881px) {
        padding-top: 11vh;
        @media screen and (max-width: 768px) {
          background: url("/novo-logo-transparent.png");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: center, center;

          .blur-wrapper {
            display: block;
            // opacity: 0.1;
            background: linear-gradient(to bottom, transparent 26%, black);
          }

          .hero-section {
            display: none;
          }
          .hero {
            width: 90%;

            h1,
            p {
              text-align: center;
            }

            h1 {
              font-size: 70px;
              @media screen and (max-width: 575px) {
                font-size: 40px;
                @media screen and (max-width: 350px) {
                  font-size: 30px;
                }
              }
            }

            .hero-buttons {
              justify-content: center;

              a {
                min-width: 200px;
              }
            }
          }
        }
      }
    }
  }

  .mission-container {
    width: 100%;
    min-height: 50vh;
    margin: 20px auto;
    background: rgb(56, 182, 255);

    .wrapper {
      width: 80%;
      height: fit-content;
      margin: auto;
      padding: 40px 0;

      h1 {
        padding: 10px;
        font-size: 45px;
        text-align: center;
        text-transform: uppercase;
        color: black;
      }

      p {
        padding: 10px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>
