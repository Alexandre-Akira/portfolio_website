<template>
  <article>
    <img
      class="image"
      :src="
        require('../../assets/images/detail/desktop/image-' +
          this.projectName +
          '-hero@2x.jpg')
      "
      alt="imagem do projeto"
    />

    <div class="project">
      <section class="project__resume">
        <div class="divider"></div>
        <h2 class="project__title">
          {{ capitalizeFirstLetter(project.id) }}
        </h2>
        <p class="project__description">
          {{ project.description.resume }}
        </p>
        <p class="project__tecnologies">
          {{ project.area }}
        </p>
        <p class="project__tecnologies">{{ project.tecnologies }}</p>

        <SecondaryButton
          :route="'project.website'"
          class="project__button"
          text="VISIT WEBSITE"
        ></SecondaryButton>
        <div class="divider"></div>
      </section>

      <section class="project__detail">
        <h2 class="project__subtitle">Project Background</h2>
        <p class="project__description">
          {{ project.description.detail }}
        </p>

        <h2 class="project__subtitle">Static Previews</h2>
        <img
          :src="
            require('../../assets/images/detail/desktop/image-' +
              this.projectName +
              '-preview-1@2x.jpg')
          "
          alt=""
          class="project__preview"
        />
        <img
          :src="
            require('../../assets/images/detail/desktop/image-' +
              this.projectName +
              '-preview-2@2x.jpg')
          "
          alt=""
          class="project__preview"
        />
      </section>
    </div>
    <nav class="project__pagination">
      <router-link
        class="project__pagination--previous"
        :to="'/portfolio/' + project.pagination.prev.toLowerCase()"
        rel="prev"
        ><div class="project__pagination--previousIcon">&lt;</div>
        <div>
          <p class="project__paginationTitle">
            {{ project.pagination.prev }}
          </p>
          <p class="project__paginationDescription">Previous Project</p>
        </div>
      </router-link>

      <router-link
        class="project__pagination--next"
        :to="'/portfolio/' + project.pagination.next.toLowerCase()"
        rel="prev"
      >
        <div>
          <p class="project__paginationTitle">
            {{ project.pagination.next }}
          </p>
          <p class="project__paginationDescription">Next Project</p>
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

  export default {
    name: "Detail",
    props: {
      projectName: {
        type: String,
        required: true,
      },
    },
    components: {
      SecondaryButton,
      ContactMe,
    },

    computed: {
      project() {
        let position = null;
        this.$store.state.projects.forEach((element, index) => {
          element.id === this.projectName ? (position = index) : false;
        });

        console.log(this.$store.state.projects[position]);

        return this.$store.state.projects[position];
      },
    },

    methods: {
      capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      },
    },
  };
</script>
<style scoped>
  /* MOBILE */

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

  @media (min-width: 320px) {
    .project__resume {
      margin-top: 40px;
    }
    .project__title {
      margin: 24px 0;
    }
    .project__description {
      margin-bottom: 24px;
      font-size: 15px;
    }

    .project__tecnologies {
      font-size: 13px;
    }

    .project__tecnologies:nth-child(5) {
      margin-bottom: 24px;
    }
    .project__button {
      display: block;
      margin-bottom: 24px;
    }

    .project__detail {
      margin-top: 48px;
    }

    .project__subtitle:nth-child(1) {
      margin-bottom: 24px;
    }

    .project__description:nth-child(2) {
      margin-bottom: 40px;
    }

    .project__subtitle:nth-child(3) {
      margin-bottom: 40px;
    }

    .project__preview:nth-child(4) {
      margin-bottom: 24px;
    }

    .project__preview:nth-child(5) {
      margin-bottom: 40px;
    }

    .contactMe {
      margin-top: 64px;
    }
    .project__pagination--next,
    .project__pagination--previous {
      padding: 24px 0;
    }

    .project__pagination--previousIcon {
      padding: 0 24px 0 0;
    }

    .project__pagination--nextIcon {
      padding: 0 0 0 24px;
    }
  }

  /* TABLET */
  @media (min-width: 768px) {
    .project {
      margin-top: 40px;
      display: grid;
      grid-template-columns: 1fr;
    }

    .project__resume {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .project__title {
      margin-bottom: 4px;
    }

    .project__title,
    .project__tecnologies:nth-child(5),
    .project__button {
      grid-column-start: 1;
      grid-column-end: 2;
      margin-top: 4px;
    }
    .project__resume .project__description {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 6;
    }
    .project__resume .divider:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 2;
      margin-bottom: 20px;
    }
    .project__resume .divider:not(:first-child) {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 6;
      grid-row-end: 7;
      margin-top: 20px;
    }

    .project__subtitle {
      margin-top: 40px;
      margin-bottom: 28px;
    }

    .project__subtitle:nth-child(3) {
      margin-bottom: 40px;
    }

    .project__preview:nth-child(4) {
      margin-bottom: 40px;
    }

    .project__preview:nth-child(5),
    .project__pagination {
      margin-bottom: 80px;
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

    .contactMe {
      margin-top: unset;
      margin-bottom: 96px;
    }
  }
  /* DESKTOP */
  @media (min-width: 1440px) {
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
  }
</style>
