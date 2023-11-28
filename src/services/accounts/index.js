import axios from "axios";

const API_URL = "http://localhost:3000/accounts";

function getAccounts() {
  return axios.get(API_URL);
}

function getAccount(id) {
  return axios.get(`${API_URL}/${id}`);
}

function getAccountTweets(id) {
  return axios.get(`${API_URL}/${id}/info/tweets`);
}

export { getAccount, getAccounts, getAccountTweets };
