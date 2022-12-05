import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

import styles from './rwd.module.scss';
import { UserImage } from './UserImage';
import { UserDetails } from './UserDetails';
import { ErrorMessage } from './ErrorMessage';
import { Loading } from './Loading';

const { Wrapper, WrapperContent, WrapperButton } = styles;

export const User = () => {
  const { handleNextUser, errorMessage, isLoading } = useContext(UserContext);

  return (
    <>
      <div className={Wrapper}>
        <div className={WrapperContent}>
          {errorMessage.length ? (
            <ErrorMessage />
          ) : isLoading ? (
            <Loading />
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
