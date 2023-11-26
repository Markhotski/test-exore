import React from 'react'
import { IProduct } from '../../../../models';
import Input from '../../../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().positive().required(),
  isPublished: yup.boolean(),
  createdAt: yup.string().default(new Date().toISOString()),
}).required();

type FormData = yup.InferType<typeof schema>;

interface Props {
  onSubmit: (data: Omit<IProduct, 'id'>) => void;
  data?: IProduct;
}

export default function Form(props: Props) {
  const { onSubmit, data } = props
  const { 
    register, 
    formState: { errors }, 
    handleSubmit: handleSubmitForm 
  } = useForm<FormData>({
    defaultValues: data,
    resolver: yupResolver(schema)
  })

  return (
    <form onSubmit={handleSubmitForm(onSubmit)} className="w-full border rounded p-5">
      <Input label='title' register={register} required errors={errors}/>
      <Input label='description' register={register} required errors={errors}/>      
      <Input label='price' register={register} required errors={errors} type='number'/>

      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input 
            {...register("isPublished")} 
            className="mr-2 leading-tight" type="checkbox"
          />
          <span className="text-sm">
            published
          </span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <input type="submit" value='submit' className="shadow bg-blue-700 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"/>
        </div>
      </div>
    </form>
  )
}
