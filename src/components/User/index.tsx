import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

import styles from './rwd.module.scss';
import { UserImage } from './UserImage';
import { UserDetails } from './UserDetails';

const { Wrapper, WrapperContent, WrapperButton, WrapperErrorMessage } = styles;

export const User = () => {
  const { handleNextUser, errorMessage } = useContext(UserContext);

  return (
    <>
      <div className={Wrapper}>
        <div className={WrapperContent}>
          {errorMessage.length ? (
            <p className={WrapperErrorMessage}>{errorMessage}</p>
          ) : (
            <>
              <UserImage />
              <UserDetails />
            </>
          )}
        </div>
      </div>
      <button className={WrapperButton} onClick={handleNextUser}>
        <span>next profiles</span>
      </button>
    </>
  );
};
