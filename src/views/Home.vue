<template>
  <div>
    <section class="greetings">
      <picture class="greetings__image">
        <source
          media="(min-width: 1440px)"
          srcset="../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcset="../assets/images/homepage/tablet/image-homepage-hero.jpg"
        />
        <source
          media="(min-width: 375px)"
          srcset="../assets/images/homepage/mobile/image-homepage-hero.jpg"
        />
        <img
          src="../assets/images/homepage/desktop/image-homepage-hero@2x.jpg"
          alt="Imagem de um computador mostrando um relatorio de dados"
        />
      </picture>

      <div class="greetings__content">
        <h2 class="greetings__title">
          Hey, I’m Alexandre Akira and I love building beautiful websites
        </h2>
        <PrimaryButton
          class="greetings__button"
          text="ABOUT ME"
        ></PrimaryButton>
      </div>
    </section>
    <article class="aboutMe">
      <header class="aboutMe__header">
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
          <img
            src="../assets/images/homepage/desktop/image-homepage-profile.jpg"
            alt="Uma foto do desenvolvedor Alexandre Akira Enjiu"
          />
        </picture>
      </header>

      <div class="aboutMe__content">
        <div class="divider"></div>
        <h2 class="aboutMe__title">About Me</h2>
        <p class="aboutMe__description">
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use Vue, but I can adapt to whatever tools are required. I’m
          based in São Paulo, BR, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <div class="aboutMe__button">
          <SecondaryButton text="GO TO PORTFOLIO"></SecondaryButton>
        </div>
        <div class="divider"></div>
      </div>
    </article>

    <section class="contactMe">
      <h2 class="contactMe__title">Interested in doing a project together?</h2>
      <div class="divider divider--tablet"></div>
      <SecondaryButton
        class="contactMe__button--center"
        text="CONTACT ME"
      ></SecondaryButton>
    </section>
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

  .greetings__title {
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: -0.36px;
  }

  .aboutMe {
    margin-top: 86px;
  }
  .aboutMe__image {
    margin-bottom: 40px;
  }

  .aboutMe__title {
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: -0.36px;
  }

  .aboutMe__description {
    color: var(--grayishDarkBlue);
    padding-bottom: 24px;
    font-family: "Public Sans", sans-serif;
    font-weight: regular;
    font-size: 16px;
    line-height: 30px;
  }

  .aboutMe__button {
    margin-bottom: 51px;
  }

  .contactMe__button--center {
    margin-right: auto;
    margin-left: auto;
  }

  .contactMe {
    margin-top: 115px;
    text-align: center;
  }

  .contactMe__title {
    margin-bottom: 40px;
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: -0.36px;
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
    .greetings {
      position: relative;
    }

    .greetings__content {
      position: absolute;
      bottom: 0;
      width: 514px;
      background-color: #fff;
    }

    .greetings__content h2 {
      padding-bottom: 42px;
      padding-top: 56px;
      padding-right: 56px;
    }

    .aboutMe {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
    }

    .aboutMe__content {
      display: flex;
      min-height: 100%;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 69px;
    }

    .aboutMe__content h2 {
      padding: 0;
    }

    .aboutMe__description {
      padding: 0;
    }

    .aboutMe__button {
      margin-bottom: 0;
    }

    .contactMe {
      display: grid;
      grid-template-columns: 3.5fr 1fr 1fr;
      align-items: center;
      gap: 32px;
    }

    .contactMe__title {
      margin: 0;
      padding: 0;
    }
    .divider--tablet {
      display: block;
    }
  }

  /* DESKTOP SETTINGS */

  @media (min-width: 1440px) {
    .aboutMe {
      margin-top: 150px;
      grid-template-columns: 1fr 1fr;
    }
    .aboutMe__content {
      padding-left: 125px;
      padding-right: 95px;
    }

    .contactMe {
      display: grid;
      grid-template-columns: 1fr 1.5fr 0fr;
      align-items: center;
      gap: 32px;
      margin-top: 150px;
    }

    .contact {
      margin-top: 150px;
    }
  }
</style>
