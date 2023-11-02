import axios from "axios";

const API_URL = "http://localhost:3000/accounts";

const getAccounts = () => {
  return axios.get(API_URL);
};

const getAccount = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const getAccountTweets = (id) => {
  return axios.get(`${API_URL}/${id}/info/tweets`);
};

export default {
  getAccount,
  getAccounts,
  getAccountTweets,
};
