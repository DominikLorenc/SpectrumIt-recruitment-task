import { useState, useEffect } from "react";

import axios from "axios";

import { ProviderProps } from "./types";
import { IUser } from "../types/types";

import { UserContext } from "./UserContext";

import { url } from "./utils";

export const UserProvider = ({ children }: ProviderProps) => {
  const [userData, setUser] = useState([] as IUser[]);
  const [startFetchFromUser, setStartFetchFromUser] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleNextUser = () => setStartFetchFromUser((prev) => prev + 1);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${url}${startFetchFromUser}`)
      .then((response) => {
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((e) => setErrorMessage(e.message));
  }, [startFetchFromUser]);

  return (
    <UserContext.Provider
      value={{ userData, handleNextUser, isLoading, errorMessage }}
    >
      {children}
    </UserContext.Provider>
  );
};
