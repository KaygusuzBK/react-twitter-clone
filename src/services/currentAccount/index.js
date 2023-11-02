import axios from "axios";

const API_URL = "http://localhost:3000/currentAccount";

const getCurrentAccount = () => {
  return axios.get(API_URL);
};

const getCurrentAccountTweets = () => {
  return axios.get(`${API_URL}/info/tweets`);
};

export default {
  getCurrentAccount,
  getCurrentAccountTweets,
};
