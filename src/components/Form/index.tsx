import { Input } from './Input';
import { Title } from './Title';

import { inputs } from './utils';

import styles from './rwd.module.scss';
import { SubmitButton } from './SubmitButton';
import { useForm } from './hook';
import { initStateProps } from './types';

const { Wrapper, WrapperForm } = styles;

export const Form = () => {
  const { formState, handleChange, handleSubmit, errors } = useForm();

  return (
    <div className={Wrapper}>
      <Title />
      <form className={WrapperForm} onSubmit={handleSubmit} noValidate>
        {inputs.map((inputProps) => {
          return (
            <Input
              formState={formState}
              key={inputProps.id}
              {...inputProps}
              errorMessage={errors[inputProps.name as keyof initStateProps]}
              onChange={(e) => handleChange(e)}
            />
          );
        })}
        <SubmitButton />
      </form>
    </div>
  );
};
