<template>
  <div class="home">
    <img
      src="../assets/images/homepage/mobile/image-homepage-hero.jpg"
      alt="hero image"
    />
    <h2>Hey, I’m Alexandre Akira and I love building beautiful websites</h2>
    <PrimaryButton text="ABOUT ME"></PrimaryButton>
    <div class="card">
      <header class="card__header">
        <img
          class="card__image"
          src="../assets/images/homepage/mobile/image-homepage-profile.jpg"
          alt=""
        />

        <div class="divider"></div>
      </header>
      <main class="card__main">
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
      </main>

      <footer class="card__footer">
        <SecondaryButton text="GO TO PORTFOLIO"></SecondaryButton>
      </footer>
      <div class="divider"></div>

      <div class="home__footer">
        <h2 class="footer__title">Interested in doing a project together?</h2>

        <SecondaryButton
          class="card__link--center"
          text="CONTACT ME"
        ></SecondaryButton>
      </div>
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
</style>
