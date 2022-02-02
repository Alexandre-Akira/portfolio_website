<template>
  <div class="portfolio">
    <Card
      class="projects"
      v-for="(project, index) in projects"
      :key="index"
      :image375px="project.card.image375"
      :image768px="project.card.image768"
      :image1440px="project.card.image1440"
      :imageDefault="project.card.imageDefault"
      :title="project.card.title"
      :description="project.card.description"
      :buttonText="project.card.buttonText"
      :buttonRoute="project.card.projectRoute"
      :isLeftPosition="project.card.isLeftPosition"
      ><p>{{ project.card.image375 }}</p></Card
    >
    <ContactMe></ContactMe>
  </div>
</template>

<script>
  import Card from "../../components/Cards/Card.vue";
  import ContactMe from "../../components/ContactMe/ContactMe.vue";

  export default {
    name: "Portfolio",

    components: {
      Card,
      ContactMe,
    },
    computed: {
      projects() {
        return this.$store.getters.allProjects;
      },
    },
  };
</script>
<style scoped>
  /* Desktop */

  .projects:first-child {
    margin-top: 40px;
  }
  .projects:not(:first-child) {
    margin-top: 80px;
  }
</style>
