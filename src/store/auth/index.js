import { getCurrentAccount } from "~/services/currentAccount/index.js";
import { getAccounts } from "~/services/accounts/index.js";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";

const initialState = {
  currentAccount: {},
  accounts: [],
};

// CURRENT ACCOUNT
export const fetchCurrentAccount = createAsyncThunk(
  "accounts/fetchCurrentAccount",
  async () => {
    const response = await getCurrentAccount();
    return response.data;
  }
);

// ACCOUNTS
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
    _setCurrentAccount(state, action) {
      state.currentAccount = action.payload;
    },
    _setAccounts(state, action) {
      // kullanmadım ama kalsın belki lazım olur
      state.accounts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrentAccount.fulfilled, (state, action) => {
      state.currentAccount = action.payload;
    });
    builder.addCase(fetchAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
    });
  },
});

export const { _setCurrentAccount } = auth.actions;
export default auth.reducer;
