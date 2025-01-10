import { getAccount, getAccounts } from "~/services/accounts/index.js";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
  account: [],
};

// ACCOUNTS
export const fetchAccount = createAsyncThunk(
  "accounts/fetchAccount",
  async () => {
    const response = await getAccount(1);
    console.log(response);
    return response.data;
  }
);

export const fetchAccounts = createAsyncThunk(
  "accounts/fetchAccounts",
  async () => {
    const response = await getAccounts();
    return response.data;
  }
);

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _setAccounts(state, action) {
      state.accounts = action.payload;
    },
    _setAccount(state, action) {
      state.account = action.payload;
    },
    _setTweets(state, action) {
      state.tweets = action.payload;
    },
    _addTwit(state, action) {
      state.accounts.info.tweets.push(action.payload);
    },
    // },
    // _lıkeTwit(state, action) {
    //   state.currentAccount.info.tweets[action.payload].like++;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAccount.fulfilled, (state, action) => {
      state.accounts = action.payload;
    });
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
    });
  },
});

export const { _setTweets, _setAccounts, _addTwit } = auth.actions;
export default auth.reducer;
