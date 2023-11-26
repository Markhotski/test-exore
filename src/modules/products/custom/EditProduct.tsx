import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'
import Form from './components/Form'
import { useAppSelector } from '../../../store/hooks/redux'
import { useActions } from '../../../store/hooks/actions'
import { useDeleteProductMutation, useUpdateProductMutation } from '../../../services'
import { IProduct } from '../../../models'
import Loader from '../../../components/Loader'

export default function EditProduct() {
  const [ updateProduct, { isLoading, isSuccess, isError } ] = useUpdateProductMutation()
  const [ deleteProduct, { isLoading: isLoadingDelete, isSuccess: isSuccessDelete, isError: isErrorDelete } ] = useDeleteProductMutation()
  const navigate = useNavigate()
  const { id } = useParams() as {id: string}
  const { products } = useAppSelector(state => state.fakestore)
  const { editProduct, removeProduct } = useActions()

  useEffect(() => {
    isSuccess && toast.success('Edited!') && navigate(-1)
    isError && toast.error('Error. Not edited!')
    isSuccessDelete && toast.success('Deleted!') && navigate(-1)
    isErrorDelete && toast.error('Error. Not deleted!')
  }, [isError, isSuccess, isSuccessDelete, isErrorDelete, navigate])

  const product = products.find(item => item.id === id)

  const handleDelete = () => {
    if(window.confirm('Are sure want to delete?')) {
      removeProduct(id)
      // id = '1' to avoid fakestoreapi delete simulation error foк unknown id
      deleteProduct('1')
    } 
  }

  const handleSubmit = (data: Omit<IProduct, 'id'>) => {
    editProduct({...data, id})
    // id = 1 to avoid fakestoreapi update simulation error for unknown id
    updateProduct({...data, id: '1'}) 
  }

  return (
    <>
      {(isLoading || isLoadingDelete) && <Loader />}
      <Form data={product} onSubmit={handleSubmit}/>
      <button onClick={handleDelete} type='button' className="mt-5 md:w-1/3 justify-self-end text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Delete</button>
    </>
  )
}
