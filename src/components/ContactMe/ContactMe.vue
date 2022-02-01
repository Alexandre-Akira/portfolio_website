<template>
  <section class="contactMe">
    <h2 class="contactMe__title">Interested in doing a project together?</h2>
    <div class="divider divider--tablet"></div>
    <SecondaryButton
      route="/"
      class="contactMe__button--center"
      text="CONTACT ME"
    ></SecondaryButton>
  </section>
</template>

<script>
  import SecondaryButton from "../Buttons/SecondaryButton.vue";
  export default {
    name: "ContactMe",
    components: {
      SecondaryButton,
    },
  };
</script>

<style scoped>
  .contactMe {
    margin-top: 115px;
    text-align: center;
  }
  .contactMe__title {
    padding: 0;
    margin-bottom: 40px;
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: -0.36px;
  }

  .contactMe__button--center {
    margin-right: auto;
    margin-left: auto;
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

  /* Tablet */
  @media (min-width: 768px) {
    .contactMe {
      display: grid;
      grid-template-columns: 3.5fr 1fr 1fr;
      align-items: center;
      gap: 32px;
      margin-top: 96px;
    }

    .divider--tablet {
      display: block;
    }
  }

  /* Desktop */

  @media (min-width: 1440px) {
    .contactMe {
      display: grid;
      grid-template-columns: 1fr 1.5fr 0fr;
      align-items: center;
      gap: 32px;
      margin-top: 150px;
    }
  }
</style>
