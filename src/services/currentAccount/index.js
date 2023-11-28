import axios from "axios";

const API_URL = "http://localhost:3000/currentAccount";

function getCurrentAccount() {
  return axios.get(API_URL);
}

function getCurrentAccountTweets() {
  return axios.get(API_URL + "/info/tweets");
}

export { getCurrentAccount, getCurrentAccountTweets };
