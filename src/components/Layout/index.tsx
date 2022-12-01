import { UserProvider } from '../../context/Provider';

import { User } from '../../components/User';
import { Header } from '../Header';

import styles from './styles.module.scss';
const { Wrapper } = styles;

export const Layout = () => {
  return (
    <div className={Wrapper}>
      <UserProvider>
        <Header />
        {/* <User /> */}
      </UserProvider>
    </div>
  );
};
