
import InputForm from '../inputForm/InputForm';
import { useForm, useFormState, FieldValues } from "react-hook-form";
import { yupResolver} from '@hookform/resolvers/yup';
import { schemaValidation, defaultValues } from './Schema/validation';

import styles from './Form.module.css'

type TypeErrorMessage<T extends string | number | null> = {
   name:T, 
   age: T, 
   email:T
}

const Form = () => {

  const {handleSubmit, control, reset } = useForm<TypeErrorMessage<number | string | null>>({
   resolver: yupResolver(schemaValidation)
  }) 

  const { errors } = useFormState({ control });

  const onSubmit = (data:FieldValues) => {
     console.log(data);
     reset();
  };

  const getErrors = (errors:FieldValues) => console.log(errors); 

  return (
    <form onSubmit={handleSubmit(onSubmit, getErrors)} className={styles.form_register} autoComplete='off'>
     <h1>Criar conta: Aprenda como e onde quiser.</h1>
     <InputForm 
        typeInput='text'
        label='Nome'
        name='name'
        placeholder='Exemplo: Ana'
        control={control} 
        errors={errors.name}
        required
     />
     <InputForm 
        typeInput='number'
        label='Idade'
        name='age'
        placeholder='Exemplo: 23'
        control={control}
        errors={errors.age}
        required
     />
     <InputForm 
        typeInput='email'
        label='Email'
        name='email'
        placeholder='Exemplo: seuemail@gmail.com'
        control={control}        
        errors={errors.email}
        required
     />
     <button className={styles.typeButton} type='submit'>Criar conta</button>
    </form>
  )
}

export default Form;