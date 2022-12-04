import * as yup from 'yup';

export const schemaValidation = yup.object().shape({
    name: yup.string().required('O nome precisa ser preenchido').min(4, 'É necessário 4 ou mais caracteres.').typeError('Nome está vázio.'), 
    age: yup.number().required('A idade precisa ser prenchida.').min(18, 'É necessário ser maior de idade.').typeError('A idade prcisa ser prenchida.'),
    email: yup.string().required('O email precisa ser prenchido').email('O email não é válido.').typeError('Email inválido.') 
});

export const defaultValues = {
  name: null,
  email: null, 
  age: null  
}