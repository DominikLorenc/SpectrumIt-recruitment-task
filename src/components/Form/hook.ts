import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import { initStateErrorProps, initStateProps } from './types';
import { initFormState, initStateError, emailRegex, phoneRegex } from './utils';

import axios from 'axios';

export const useForm = () => {
  const [formState, setFormState] = useState<initStateProps>(initFormState);

  const [errors, setError] = useState<initStateErrorProps>(initStateError);

  const {  getDataForForm } = useContext(UserContext);

  const validateForm = () => {
    setError((prev) => ({ ...prev, ...initStateError }));

    if (!formState.login) {
      setError((prev) => ({ ...prev, login: 'Login jest wymagany' }));
    }

    if (!formState.password) {
      setError((prev) => ({ ...prev, password: 'Hasło jest wymagany' }));
    }

    if (!formState.email.match(emailRegex)) {
      setError((prev) => ({
        ...prev,
        email: 'Nieprawidłowy format adresu e-mail',
      }));
    }

    if (!formState.phone.match(phoneRegex)) {
      setError((prev) => ({ ...prev, phone: 'Nieprawidłowy numer telefonu' }));
    }

    if (!formState.checkbox) {
      setError((prev) => ({
        ...prev,
        checkbox: 'Wymagana akceptacja regulaminu',
      }));
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormState((prevFormState) => {
      return {
        ...prevFormState,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    validateForm();
    const isValid = Object.values(errors).every((error) => error.length === 0);
    const isEmptyFormState = Object.values(formState).some(
      (el) => el.length === 0,
    );

    if (!isValid && !isEmptyFormState && formState.checkbox) {
      const data = getDataForForm();

      axios
        .post('https://example/', {
          ...formState,
          data,
        })
        .then((response) => {
          setFormState((prev) => ({ ...prev, ...initFormState }));
        })
        .catch((e) => {
          setFormState((prev) => ({ ...prev, ...initFormState }));
          //this rest form is only for test
          console.log(e);
        });
    }
  };

  return { formState, handleChange, handleSubmit, errors };
};
