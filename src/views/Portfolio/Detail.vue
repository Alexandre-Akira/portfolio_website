<template>
  <article>
    <img
      class="image"
      src="../../assets/images/detail/desktop/image-manage-preview-1@2x.jpg"
      alt="imagem do projeto"
    />

    <div class="project">
      <section class="project__resume">
        <div class="divider"></div>
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
          route="/"
          class="resume__button"
          text="VISIT WEBSITE"
        ></SecondaryButton>
        <div class="divider"></div>
      </section>

      <section class="project__detail">
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
    <nav class="project__pagination">
      <router-link class="project__pagination--previous" to="/" rel="prev"
        ><div class="project__pagination--previousIcon">&lt;</div>
        <div>
          <p class="project__paginationTitle">Fylo</p>
          <p class="project__paginationDescription">Previous Project</p>
        </div>
      </router-link>

      <router-link class="project__pagination--next" to="/" rel="prev">
        <div>
          <p class="project__paginationTitle">Bookmark</p>
          <p class="project__paginationDescription">Previous Project</p>
        </div>
        <div class="project__pagination--nextIcon">&gt;</div>
      </router-link>
    </nav>
    <ContactMe></ContactMe>
  </article>
</template>
<script>
  import SecondaryButton from "../../components/Buttons/SecondaryButton.vue";
  import ContactMe from "../../components/ContactMe/ContactMe.vue";
  import API from "../../services/portfolioDetailService";
  export default {
    name: "Detail",
    props: ["projectName"],
    components: {
      SecondaryButton,
      ContactMe,
    },

    created() {
      API.getProject(this.projectName)
        .then((response) => {
          this.project = response.data;
          console.log(this.project);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    data() {
      return {
        project: null,
      };
    },
  };
</script>
<style scoped>
  .project__pagination {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .project__paginationTitle {
    font-style: "Ibarra Real Nova", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.29px;
    color: var(--grayishDarkBlue);
  }

  .project__paginationDescription {
    font-style: "Public Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 30px;
    mix-blend-mode: normal;
    opacity: 0.5;
    color: var(--grayishDarkBlue);
  }
  .project__pagination--next,
  .project__pagination--previous {
    border-top: solid 1px rgb(51, 50, 61, 0.15);
    border-bottom: solid 1px rgb(51, 50, 61, 0.15);
    display: flex;
    align-items: center;
    mix-blend-mode: normal;
  }
  .project__pagination--next {
    border-left: solid 1px rgb(51, 50, 61, 0.15);
    text-align: end;
    justify-content: end;
  }
  .divider {
    height: 1px;
    background-color: var(--grayishDarkBlue);
    mix-blend-mode: normal;
    opacity: 0.15;
  }

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
    margin-top: 115px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 125px;
  }

  .project__resume {
    max-height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project__subtitle {
    margin-bottom: 28px;
  }

  .project__subtitle:not(:first-child) {
    margin-top: 40px;
  }

  .project__preview:nth-child(4) {
    margin-bottom: 30px;
  }

  .project__pagination {
    margin-top: 64px;
  }

  .project__pagination--next,
  .project__pagination--previous {
    padding: 32px 0;
  }

  .project__pagination--previousIcon {
    padding: 0 32px 0 0;
  }

  .project__pagination--nextIcon {
    padding: 0 0 0 32px;
  }
</style>
