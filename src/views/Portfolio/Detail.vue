<template>
  <article>
    <img
      class="image"
      src="../../assets/images/detail/desktop/image-manage-preview-1@2x.jpg"
      alt="imagem do projeto"
    />

    <div class="project">
      <section class="project__resume">
        <h2 class="project__title">Manage</h2>
        <p class="project__description">
          This project required me to build a fully responsive landing page to
          the designs provided. I used HTML5, along with CSS Grid and JavaScript
          for the areas that required interactivity, such as the testimonial
          slider.
        </p>
        <p class="project__tecnologies">
          Interaction Design / Front End Development
        </p>
        <p class="project__tecnologies">HTML / CSS / JS</p>

        <SecondaryButton
          class="resume__button"
          text="VISIT WEBSITE"
        ></SecondaryButton>
      </section>

      <section class="">
        <h2 class="project__subtitle">Project Background</h2>
        <p class="project__description">
          This project was a front-end challenge from Frontend Mentor. It’s a
          platform that enables you to practice building websites to a design
          and project brief. Each challenge includes mobile and desktop designs
          to show how the website should look at different screen sizes.
          Creating these projects has helped me refine my workflow and solve
          real-world coding problems. I’ve learned something new with each
          project, helping me to improve and adapt my style.
        </p>

        <h2 class="project__subtitle">Static Previews</h2>
        <img
          src="../../assets/images/detail/desktop/image-manage-preview-1@2x.jpg"
          alt=""
          class="project__preview"
        />
        <img
          src="../../assets/images/detail/desktop/image-manage-preview-1@2x.jpg"
          alt=""
          class="project__preview"
        />
      </section>
    </div>
  </article>
</template>
<script>
  import SecondaryButton from "../../components/Buttons/SecondaryButton.vue";

  export default {
    name: "Detail",
    components: {
      SecondaryButton,
    },
  };
</script>
<style scoped>
  .project__title {
    font-family: "Ibarra Real Nova", sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 42px;
    letter-spacing: -0.36px;
    font-style: normal;
    color: var(--grayishDarkBlue);
  }

  .project__description {
    font-family: "Public Sans", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 30px;
    font-style: normal;
    color: var(--grayishDarkBlue);
  }

  .project__tecnologies {
    font-family: "Public Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    color: var(--slightlyDesaturatedCyan);
  }

  .project__subtitle {
    font-family: "Ibarra Real Nova", sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: -0.29px;
    font-style: normal;
    color: var(--grayishDarkBlue);
  }
  /* DESKTOP */
  .project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 125px;
  }
</style>
