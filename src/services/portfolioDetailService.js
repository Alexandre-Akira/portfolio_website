import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://my-json-server.typicode.com/Alexandre-Akira/akira-JSON-server",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getProjects() {
    return apiClient.get("/projects");
  },
  getProject(projectName) {
    return apiClient.get("/projects/" + projectName);
  },
};
