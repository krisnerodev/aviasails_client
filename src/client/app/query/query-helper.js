import axios from "axios";

export const QueryHelper = {
  getDashboard: (infoDate) => {
    const method = "POST";
    const url = "http://localhost:5000/get-dashboard";
    const auth = {
      username: "kris",
      password: "secret_key"
    };
    const data = {type: infoDate};
    const responseType = "json";
    return axios({method, url, data, auth, responseType});
  }
};