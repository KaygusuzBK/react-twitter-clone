import store from "~/store";
import {_setCurrentAccount, _addTwit} from "~/store/auth/index";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))
