<template>
  <article class="card">
    <picture class="card__image">
      <source
        media="(min-width: 375px)"
        :srcset="require('../../assets/images/portfolio/mobile/' + image375px)"
      />
      <source
        media="(min-width: 768px)"
        :srcset="require('../../assets/images/portfolio/tablet/' + image768px)"
      />
      <source
        media="(min-width: 1440px)"
        :srcset="
          require('../../assets/images/portfolio/desktop/' + image1440px)
        "
      />
      <img
        :src="require('../../assets/images/portfolio/desktop/' + imageDefault)"
        alt="Uma foto do desenvolvedor Alexandre Akira Enjiu"
      />
    </picture>

    <div
      class="card__content"
      :class="{ 'card__content--order': isLeftPosition }"
    >
      <div class="divider"></div>
      <h2 class="card__title">{{ title }}</h2>
      <p class="card__description">
        {{ description }}
      </p>
      <div class="card__button">
        <SecondaryButton
          :route="buttonRoute"
          :text="buttonText"
        ></SecondaryButton>
      </div>
      <div class="divider"></div>
    </div>
  </article>
</template>
<script>
  import SecondaryButton from "../Buttons/SecondaryButton.vue";

  export default {
    name: "Card",

    components: {
      SecondaryButton,
    },
    props: {
      image1440px: { type: String, required: true },
      image768px: { type: String, required: true },
      image375px: { type: String, required: true },
      imageDefault: { type: String, required: true },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      buttonText: {
        type: String,
        required: true,
      },
      buttonRoute: {
        type: String,
        required: true,
      },
      isLeftPosition: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>
<style scoped>
  .card__content--order {
    order: -1;
  }
  .card__title {
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: -0.36px;
    padding: 32px 0 28px 0;
  }

  .card__description {
    color: var(--grayishDarkBlue);
    padding-bottom: 24px;
    font-family: "Public Sans", sans-serif;
    font-weight: regular;
    font-size: 16px;
    line-height: 30px;
  }

  .card__button {
    margin-bottom: 51px;
  }

  .card__image img {
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    .card {
      display: grid;
      grid-template-columns: 0.69fr 1fr;
      gap: 69px;
    }

    .card__image img {
      height: 100%;
      min-width: 339px;
    }

    .card__content {
      display: flex;
      min-height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }

    .card__content h2 {
      padding: 0;
    }

    .card__description {
      padding: 0;
    }

    .card__button {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1440px) {
    .card {
      grid-template-columns: 1fr 1fr;
    }

    .card__content {
      padding-left: 125px;
      padding-right: 95px;
    }

    .card__image img {
      min-height: 500px;
      min-width: 540px;
    }
  }

  .divider {
    height: 1px;
    background-color: var(--grayishDarkBlue);
    mix-blend-mode: normal;
    opacity: 0.15;
  }
</style>
