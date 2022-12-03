import { createContext } from "react";
import { IUser } from "../types/types";
import { IUserContext } from "./types";

const initState = {
  userData: {} as IUser,
  handleNextUser: () => {},
  isLoading: false,
  errorMessage: "",
};

export const UserContext = createContext<IUserContext>(initState);
