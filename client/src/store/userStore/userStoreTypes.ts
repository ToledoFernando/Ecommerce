export interface IUserDataLogin {
  email: string;
  password: string;
}

export interface IUserStore {
  user: IUserData | null;
  isLoggedIn: boolean;
  setLogin: (data: IUserDataLogin) => Promise<void>;
}

export interface IUserData {
  id: string;
  name: string;
  email: string;
}
