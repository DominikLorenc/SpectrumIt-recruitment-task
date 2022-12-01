import { Name } from './Name';
import { FormButton } from './FormButton';

import styles from './rwd.module.scss';

const { Wrapper } = styles;

export const Header = () => {
  return (
    <header className={Wrapper}>
      <Name />
      <FormButton />
    </header>
  );
};
