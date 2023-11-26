import React, { useEffect } from 'react'
import { IProduct } from '../../../models'
import Loader from '../../../components/Loader'
import { toast } from 'react-toastify'
import { v4 as uuid } from 'uuid';
import Form from './components/Form'
import { useNavigate } from 'react-router-dom'
import { useCreateProductMutation } from '../../../services';
import { useActions } from '../../../store/hooks/actions';

export default function CreateProduct() {
  const [ createProduct, { isLoading, isSuccess, isError } ] = useCreateProductMutation()
  const { addProduct } = useActions()
  const navigate = useNavigate()

  useEffect(() => {
    isSuccess && toast.success('Created!') && navigate(-1)
    isError && toast.error('Error. Not created!')
  }, [isSuccess, isError, navigate])


  const handleSubmit = (data: Omit<IProduct, 'id'>) => {
    createProduct(data)
    addProduct({...data, id: uuid() })
  }

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit}/>
    </>
  )
}
