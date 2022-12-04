import { IUser } from "../types/types";

export interface IUserContext {
  userData: IUser;
  handleNextUser: () => void;
  isLoading: boolean;
  errorMessage: string;
  getDataForForm: () => void
}

export interface ProviderProps {
  children: React.ReactNode;
}
