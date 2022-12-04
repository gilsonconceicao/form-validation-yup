import {FieldError} from 'react-hook-form'; 

export interface TypeInputProps {
    name: string; 
    label: string; 
    placeholder:string; 
    typeInput: string; 
    errors?: FieldError;
    control: any;
    required: any
}
