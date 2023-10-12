import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "@KaygusuzBK",
    fullName: "Kaygusuzbk",
    avatar:
      "https://pbs.twimg.com/profile_images/1655678021947252744/HxRdHd_S_400x400.jpg",
    backgroundImage:
      "https://fastly.picsum.photos/id/108/401/301.jpg?hmac=l9HRiXTAD02eTpg-6EVJc_PQv_HU20nrzbgMnWRaLp0",
    info: {
      birthday: "23.02.2001",
      bio: "💻",
      createdAt: "09.10.2023",
      followers: 100,
      following: 100,
      tweets: [
        {
          id: 1,
          tweet: "Merhaba",
          like: 100,
          retweet: 100,
          comment: 100,
          date: "12.12.2021",
          reply: [
            {
              id: 1,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
            {
              id: 2,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
            {
              id: 3,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
          ],
        },
        {
          id: 2,
          tweet: "Biz",
          like: 100,
          retweet: 100,
          comment: 100,
          date: "12.12.2021",
          reply: [
            {
              id: 1,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
            {
              id: 2,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
            {
              id: 3,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
          ],
        },
        {
          id: 3,
          tweet: "Dostuz",
          like: 100,
          retweet: 100,
          comment: 100,
          date: "12.12.2021",
          reply: [
            {
              id: 1,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
            {
              id: 2,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
            {
              id: 3,
              tweet: "Merhaba",
              like: 100,
              retweet: 100,
              comment: 100,
              date: "12.12.2021",
            },
          ],
        },
      ],
    },
  },
  accounts: [
    {
      id: 1,
      username: "@KaygusuzBK",
      fullName: "Kaygusuzbk",
      avatar:
        "https://pbs.twimg.com/profile_images/1655678021947252744/HxRdHd_S_400x400.jpg",
      backgroundImage:
        "https://fastly.picsum.photos/id/108/401/301.jpg?hmac=l9HRiXTAD02eTpg-6EVJc_PQv_HU20nrzbgMnWRaLp0",
      info: {
        birthday: "23.02.2001",
        bio: "💻",
        createdAt: "09.10.2023",
        followers: 100,
        following: 100,
        tweets: [
          {
            id: 1,
            tweet: "Merhaba",
            like: 100,
            retweet: 100,
            comment: 100,
          },
          {
            id: 2,
            tweet: "Merhaba",
            like: 100,
            retweet: 100,
            comment: 100,
          },
          {
            id: 3,
            tweet: "Merhaba",
            like: 100,
            retweet: 100,
            comment: 100,
          },
        ],
      },
    },
    {
      id: 2,
      username: "@BlueEjder2",
      fullName: "IrmakArtar",
      avatar:
        "https://pbs.twimg.com/profile_images/1552719294684958721/cXzlTEgL_400x400.jpg",
      backgroundImage:
        "https://fastly.picsum.photos/id/412/400/200.jpg?hmac=W_qMRvAguhcdbl5a2Yk8CSGaRhTidqH5d_9SDPumGYA",
      info: {
        birthday: "12.02.2001",
        bio: "💻2",
        createdAt: "12.10.2023",
        followers: 200,
        following: 300,
        tweets: [
          {
            id: 1,
            tweet: "Merhaba",
            like: 100,
            retweet: 100,
            comment: 100,
          },
          {
            id: 2,
            tweet: "Merhaba",
            like: 100,
            retweet: 100,
            comment: 100,
          },
          {
            id: 3,
            tweet: "Merhaba",
            like: 100,
            retweet: 100,
            comment: 100,
          },
        ],
      },
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
