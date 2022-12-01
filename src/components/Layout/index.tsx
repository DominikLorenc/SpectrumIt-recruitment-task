import { UserProvider } from "../../context/Provider";

import { User } from "../../components/User";

import styles from "./styles.module.scss";
const { Wrapper } = styles;

export const Layout = () => {
  return (
    <div className={Wrapper}>
      <UserProvider>
        <User />
      </UserProvider>
    </div>
  );
};
