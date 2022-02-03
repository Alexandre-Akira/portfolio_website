import { createStore } from "vuex";
import API from "../services/portfolioDetailService";

export default createStore({
  state: {
    projects: null,
  },
  mutations: {
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
  },
  getters: {
    allProjects: (state) => state.projects,
  },
  actions: {
    getProjects({ commit }) {
      NProgress.start();
      API.getProjects()
        .then((response) => {
          commit("SET_PROJECTS", response.data);
        })
        .catch(() => {
          alert(
            "Sorry, we are having network issues! Please, try again later!"
          );
        });
      NProgress.done();
    },
  },
  modules: {},
});
