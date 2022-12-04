import styles from './rwd.module.scss';
import { InputProps } from './types';
import { cx } from '../../../utils/index';
import { initStateProps } from '../types';

const {
  Wrapper,
  WrapperLabel,
  WrapperInput,
  WrapperInputError,
  WrapperErrorMessage,
  WrapperCheckboxInput,
  WrapperCheckboxLabel,
  WrapperCheckboxInputError,
  WrapperCheckbox,
} = styles;

export const Input = ({
  id,
  name,
  label,
  onChange,
  errorMessage,
  type,
  formState,
}: InputProps) => {
  return (
    <div className={Wrapper}>
      {type === 'checkbox' ? (
        <div className={WrapperCheckbox}>
          <label className={WrapperCheckboxLabel} htmlFor={id}>
            <input
              type={type}
              className={cx(
                WrapperCheckboxInput,
                errorMessage && WrapperCheckboxInputError,
              )}
              id={id}
              name={name}
              onChange={onChange}
              checked={formState.checkbox}
            />
            <span>{label}</span>
          </label>
          <p className={WrapperErrorMessage}>{errorMessage}</p>
        </div>
      ) : (
        <>
          <label className={WrapperLabel} htmlFor={id}>
            {label}:
          </label>
          <input
            type={type}
            className={cx(WrapperInput, errorMessage && WrapperInputError)}
            id={id}
            name={name}
            onChange={onChange}
            value={formState[name as keyof Omit<initStateProps, 'checkbox'>]}
          />
          <p className={WrapperErrorMessage}>{errorMessage}</p>
        </>
      )}
    </div>
  );
};
