<template>
  <div class="home">
    <section class="introduction">
      <picture class="introduction__image">
        <source
          media="(min-width: 1440px)"
          srcset="
            ../assets/images/homepage/desktop/image-homepage-hero.jpg 1340w
          "
        />
        <source
          media="(min-width: 768px)"
          srcset="../assets/images/homepage/tablet/image-homepage-hero.jpg"
        />
        <source
          media="(min-width: 375px)"
          srcset="../assets/images/homepage/mobile/image-homepage-hero.jpg"
        />
        <img src="OtherImage.png" alt="IfItDoesntMatchAnyMedia" />
      </picture>

      <div class="introduction__content">
        <h2>Hey, I’m Alexandre Akira and I love building beautiful websites</h2>
        <PrimaryButton
          class="introduction__button"
          text="ABOUT ME"
        ></PrimaryButton>
      </div>
    </section>
    <div class="card">
      <header class="card__header">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcset="
              ../assets/images/homepage/desktop/image-homepage-profile.jpg
            "
          />
          <source
            media="(min-width: 768px)"
            srcset="../assets/images/homepage/tablet/image-homepage-profile.jpg"
          />
          <source
            media="(min-width: 375px)"
            srcset="../assets/images/homepage/mobile/image-homepage-profile.jpg"
          />
          <img src="OtherImage.png" alt="IfItDoesntMatchAnyMedia" />
        </picture>
      </header>

      <main class="card__main">
        <div class="divider"></div>
        <h2>About Me</h2>
        <p class="card__description body1">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use Vue, but I can adapt to whatever tools are required. I’m
          based in São Paulo, BR, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <div class="card__footer">
          <SecondaryButton text="GO TO PORTFOLIO"></SecondaryButton>
        </div>
        <div class="divider"></div>
      </main>
    </div>

    <div class="home__footer">
      <h2 class="footer__title">Interested in doing a project together?</h2>
      <div class="divider divider--tablet"></div>
      <SecondaryButton
        class="card__link--center"
        text="CONTACT ME"
      ></SecondaryButton>
    </div>
  </div>
</template>

<script>
  import PrimaryButton from "../components/Buttons/PrimaryButton.vue";
  import SecondaryButton from "../components/Buttons/SecondaryButton.vue";

  export default {
    name: "Home",
    components: {
      PrimaryButton,
      SecondaryButton,
    },
  };
</script>

<style scoped>
  /* MOBILE SETTINGS */
  h2 {
    padding-top: 24px;
    padding-bottom: 32px;
    color: var(--grayishDarkBlue);
  }

  .card {
    margin-top: 86px;
  }
  .card__image {
    margin-bottom: 40px;
  }

  .card__title {
    margin-top: 40px;
  }

  .card__description {
    color: var(--grayishDarkBlue);
    padding-bottom: 24px;
  }

  .card__footer {
    margin-bottom: 51px;
  }

  .card__link--center {
    margin-right: auto;
    margin-left: auto;
  }

  .home__footer {
    margin-top: 115px;
    text-align: center;
  }

  .footer__title {
    margin-bottom: 40px;
  }

  .divider {
    height: 1px;
    background-color: var(--grayishDarkBlue);
    mix-blend-mode: normal;
    opacity: 0.15;
  }

  .divider--tablet {
    display: none;
  }

  /* TABLET SETTINGS */

  @media (min-width: 768px) {
    .introduction {
      position: relative;
    }

    .introduction__content {
      position: absolute;
      bottom: 0;
      width: 514px;
      background-color: #fff;
    }

    .introduction__content h2 {
      padding-bottom: 42px;
      padding-top: 56px;
      padding-right: 56px;
    }

    .card {
      display: flex;
      justify-content: space-between;
    }

    .card__main {
      display: flex;
      min-height: 100%;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 69px;
    }

    .card__main h2 {
      padding: 0;
    }

    .card__description {
      padding: 0;
    }

    .card__footer {
      margin-bottom: 0;
    }

    .home__footer {
      display: grid;
      grid-template-columns: 3.5fr 1fr 1fr;
      align-items: center;
      gap: 32px;
    }

    .footer__title {
      margin: 0;
      padding: 0;
    }
    .divider--tablet {
      display: block;
    }
  }

  /* DESKTOP SETTINGS */

  @media (min-width: 1440px) {
    .introduction__content h2 {
      font-family: "Ibarra Real Nova", serif;
      font-weight: bold;
      font-size: 50px;
      line-height: 50px;
      letter-spacing: -0.45px;
    }

    .card {
      margin-top: 150px;
    }
    .card__main {
      padding-left: 125px;
      padding-right: 95px;
    }

    .home__footer {
      display: grid;
      grid-template-columns: 1fr 1.5fr 1fr;
      align-items: center;
      gap: 32px;
      margin-top: 150px;
    }

    .contact {
      margin-top: 150px;
    }
  }
</style>
