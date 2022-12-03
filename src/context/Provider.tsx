import { useState, useEffect } from 'react';

import axios from 'axios';

import { ProviderProps } from './types';
import { IUser } from '../types/types';

import { UserContext } from './UserContext';

import { url } from './utils';

export const UserProvider = ({ children }: ProviderProps) => {
  const [userData, setUser] = useState({} as IUser);

  const [startFetchFromUser, setStartFetchFromUser] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNextUser = () => setStartFetchFromUser((prev) => prev + 1);

  console.log(userData, startFetchFromUser);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${url}${startFetchFromUser}`)
      .then((response) => {
        if (errorMessage.length) {
          setErrorMessage('');
        }

          const data =  response.data;
          const src = `https://picsum.photos/534/383?random=${startFetchFromUser}`;

          setUser({ ...data, src });

          setIsLoading(false);
      })
      .catch((e) => {
        setErrorMessage(e.response.data.detail);
        setIsLoading(false);
      });
  }, [startFetchFromUser]);

  return (
    <UserContext.Provider
      value={{ userData, handleNextUser, isLoading, errorMessage }}>
      {children}
    </UserContext.Provider>
  );
};
