import { create } from "zustand";
import { IUserStore, IUserDataLogin } from "./userStoreTypes";

export const userStore = create<IUserStore>((set) => ({
  isLoggedIn: true,
  user: null,
  setLogin: async (data: IUserDataLogin) => {
    console.log(data);
  },
}));
