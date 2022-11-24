import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from "./components/Input";

import "./index.css";


type CreateUserProps = {
  name: string;
  email: string;
  cpf: string;
}

const createUserSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório.'),
  email: yup.string().required('E-mail é obrigatório.').email('E-mail inválido.'),
  cpf: yup.string().required('CPF é obrigatório.').min(11, 'Deve ter 11 caracteres')

});



export default function App() {

  const { register, handleSubmit, formState} = useForm<CreateUserProps>({
    resolver: yupResolver(createUserSchema)
  });

  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<CreateUserProps> = async (values) => {
    console.log(values);
  }


  return (
    <div className="bg-black text-cyan-50 w-full flex justify-center h-screen items-center">
      <div className="bg-zinc-400 w-96 h-96 items-center flex justify-center ">
        <form onSubmit={handleSubmit(handleCreateUser)}>
          <Input error={errors.name} type="text" label="Nome" {...register('name')}/>
          <Input error={errors.email} type="email" label="E-mail" {...register('email')}/>
          <Input error={errors.cpf} type="text" label="CPF" {...register('cpf')}/>
          <button className='bg-violet-700 w-full mt-6 shadow-md' type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
}