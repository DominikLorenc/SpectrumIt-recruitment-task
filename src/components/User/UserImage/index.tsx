import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';

import styles from './rwd.module.scss';
const { Wrapper } = styles;

export const UserImage = () => {
  const {
    userData: { src = '' },
  } = useContext(UserContext);

  return (
    <div className={Wrapper}>
      <img src={src} alt="user" loading="lazy" />
    </div>
  );
};
