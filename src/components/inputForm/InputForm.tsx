import {Controller} from 'react-hook-form'; 
import {TypeInputProps} from './type'; 

const InputForm = ({name, label, placeholder, errors, typeInput, control}: TypeInputProps) => {

  return (
    <>
      <Controller
         render={({ field }) => (
            <label>
              {label}
             <input 
                {...field}
                type={typeInput}
                placeholder={placeholder}
                name={name}
             />  
            <p className='error_message'>{errors && errors.message}</p>
           </label> 
        )}
        control={control}
        name={name}
      />
    </>);
}

export default InputForm;