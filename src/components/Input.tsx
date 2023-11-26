import React from 'react'
import { Path, UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'

interface Props<T extends FieldValues> {
  label: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  errors?: FieldErrors<T>;
  type?: 'text' | 'number' | 'password'
}

export default function Input<T extends FieldValues>(props: Props<T>) {
  const { label, register, required = false, errors, type} = props
  return (
    <div className="md:flex md:items-start mb-2 md:mb-6 ">
      <div className="md:w-1/3 pt-2">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor={label}>
          {label}
        </label>
      </div>
      <div className="md:w-2/3">
        <input 
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 aria-invalid:border-red-500" 
          {...register(label, { required })} 
          aria-invalid={errors?.[label] ? "true" : "false"}        
          required={required}
          type={type}
        />
        {errors?.[label] && <p className='text-red-600' role="alert">{errors?.[label]?.message as string}</p>}
      </div>
    </div>
  )
}
