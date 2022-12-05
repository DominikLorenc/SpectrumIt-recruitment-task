import { createContext } from "react";
import { IUserContext } from "./types";
import { initState } from "./utils";



export const UserContext = createContext<IUserContext>(initState);
