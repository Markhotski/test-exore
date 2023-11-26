import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from '../../components/Input';
import { useLoginMutation } from '../../services';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
}).required();

type FormData = yup.InferType<typeof schema>;

export const LOCAL_STORAGE_TOKEN = 'test_exore_token'

export default function LoginForm() {
  const { register, formState: { errors }, handleSubmit } = useForm<FormData>({ resolver: yupResolver(schema) })
  const [ login, { isError, isLoading, isSuccess, data } ] = useLoginMutation()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem(LOCAL_STORAGE_TOKEN) && navigate('/products', {replace: true})
  }, [])

  useEffect(() => {
    if (isSuccess && data) {
      toast.success('Logged in!')
      localStorage.setItem(LOCAL_STORAGE_TOKEN, data.token)
      navigate('/products', {replace: true})
    }
  }, [isSuccess, data, navigate])

  return (
    <form onSubmit={handleSubmit(login)} className="w-full md:w-2/3 lg:w-1/2 border rounded p-5 mx-auto">
      {isLoading && <Loader />}
      <h2 className='text-center text-gray-600 text-lg font-bold mb-5 pb-2 uppercase border-b-2'>Login form</h2>
      <Input label='username' register={register} required errors={errors}/>
      <Input label='password' register={register} required errors={errors} type='password' /> 
      
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          {isError && <p className='text-red-600' role="alert">username or password is incorrect</p>}
          <input type="submit" value='Login' className="mt-4 w-full shadow bg-blue-700 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
        </div>
      </div>
    </form>
  )
}
