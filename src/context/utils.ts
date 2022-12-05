import { IUser } from "../types/types";

export const url = "https://swapi.py4e.com/api/people/";

export const initState = {
    userData: {} as IUser,
    handleNextUser: () => {},
    isLoading: false,
    errorMessage: "",
    getDataForForm: () => {}
  };