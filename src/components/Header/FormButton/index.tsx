import styles from './rwd.module.scss';
import { Link } from 'react-router-dom';
const { Wrapper, WrapperLink } = styles;

export const FormButton = () => {
  return (
 
      <div className={Wrapper}>
        <Link to="/form"className={WrapperLink} >
          <span>formularz</span>
          <span>rejestracyjny</span>
        </Link>
      </div>

  );
};
