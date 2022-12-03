import { useContext } from 'react';
import { AccountStar, CheckCircle } from '../../../assets/SVG';
import { UserContext } from '../../../context/UserContext';

import styles from './rwd.module.scss';
const { Wrapper, WrapperName, WrapperDetails } = styles;

export const UserDetails = () => {
  const {
    userData: { name, birth_year, eye_color },
  } = useContext(UserContext);

  return (
    <div className={Wrapper}>
      <div className={WrapperName}>
        <p>{name}</p>
        <AccountStar />
        <CheckCircle />
      </div>
      <div className={WrapperDetails}>
        <p>age: {birth_year}</p>
        <p>eye color: {eye_color}</p>
      </div>
    </div>
  );
};
