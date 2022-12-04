import { initStateProps, initStateErrorProps } from './types';

export const inputs = [
  { id: 'login', name: 'login', label: 'Login', type: 'text' },
  { id: 'password', name: 'password', label: 'Hasło', type: 'password' },
  { id: 'email', name: 'email', label: 'E-mail', type: 'email' },
  { id: 'phone', name: 'phone', label: 'Numer telefonu', type: 'text' },
  {
    id: 'checkbox',
    name: 'checkbox',
    label: 'Akceptuję Regulamin',
    type: 'checkbox',
  },
];

export const initFormState: initStateProps = {
  login: '',
  password: '',
  email: '',
  phone: '',
  checkbox: false,
};

export const initStateError: initStateErrorProps = {
  login: '',
  password: '',
  email: '',
  phone: '',
  checkbox: '',
};



export const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
export const phoneRegex = new RegExp(/(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/g)
