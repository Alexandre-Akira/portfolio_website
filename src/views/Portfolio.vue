<template>
  <div class="portfolio">
    <Card
      class="projects"
      v-for="(card, index) in cards"
      :key="index"
      :image375px="card.image375"
      :image768px="card.image768"
      :image1440px="card.image1440"
      :imageDefault="card.imageDefault"
      :title="card.title"
      :description="card.description"
      :buttonText="card.buttonText"
      :isLeftPosition="card.isLeftPosition"
    ></Card>

    <ContactMe></ContactMe>
  </div>
</template>

<script>
  import Card from "../components/Cards/Card.vue";
  import ContactMe from "../components/ContactMe/ContactMe.vue";

  export default {
    name: "Portfolio",
    components: {
      Card,
      ContactMe,
    },
    data() {
      return {
        cards: [
          {
            image375: require("../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"),
            image768: require("../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"),
            image1440: require("../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"),
            imageDefault: require("../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg"),
            title: "Manage",
            description:
              "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
            buttonText: "View Project",
            isLeftPosition: false,
          },

          {
            image375: require("../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"),
            image768: require("../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"),
            image1440: require("../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"),
            imageDefault: require("../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg"),
            title: "Bookmark",
            description:
              "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
            buttonText: "View Project",
            isLeftPosition: true,
          },

          {
            image375: require("../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"),
            image768: require("../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"),
            image1440: require("../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"),
            imageDefault: require("../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg"),
            title: "Insure",
            description:
              "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
            buttonText: "View Project",
            isLeftPosition: false,
          },

          {
            image375: require("../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"),
            image768: require("../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"),
            image1440: require("../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"),
            imageDefault: require("../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg"),
            title: "Fylo",
            description:
              "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
            buttonText: "View Project",
            isLeftPosition: true,
          },
        ],
      };
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
