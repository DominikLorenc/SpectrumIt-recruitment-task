import { UserContext } from '../../../context/UserContext';
import { useContext } from 'react';

import styles from './rwd.module.scss';
const { Wrapper } = styles;

export const ErrorMessage = () => {
  const { errorMessage } = useContext(UserContext);
  return <p className={Wrapper}>{errorMessage}</p>;
};
