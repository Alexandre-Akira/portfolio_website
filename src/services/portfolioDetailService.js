import axios from "axios";

const apiPortfolioDetail = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Alexandre-Akira/akira-JSON-server",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, page) {
    return apiPortfolioDetail.get(
      "/events?_limit=" + perPage + "&_page=" + page
    );
  },
};
