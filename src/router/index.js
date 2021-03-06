import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PortfolioDetail from "../views/Portfolio/Detail.vue";
import Contact from "../views/Contact.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import("../views/Portfolio/Portfolio.vue");
    },
  },
  {
    path: "/portfolio/:projectName",
    name: "Detail",
    component: PortfolioDetail,
    props: true,
  },

  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
