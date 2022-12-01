import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

import styles from "./styles.module.scss";
const {  } = styles;

export const User = () => {
  const { userData, handleNextUser, isLoading } = useContext(UserContext);

  return (
    <div>
        {isLoading && <p>Loading...</p>}
      <button onClick={handleNextUser}>Cick</button>
      {JSON.stringify(userData).toString()}
    </div>
  );
};
