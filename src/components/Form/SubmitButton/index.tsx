import styles from './rwd.module.scss';
const { Button } = styles;

export const SubmitButton = () => {
  return (
    <button className={Button} type="submit">
      <span>zapisz</span>
    </button>
  );
};
