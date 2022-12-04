import { initStateProps } from '../types';

export interface InputProps {
    id: string;
    name: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
    type: string;
    formState: initStateProps
}