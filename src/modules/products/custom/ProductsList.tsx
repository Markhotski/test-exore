import React, { useCallback, useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import ProductCard from './components/ProductCard'
import LimitButtons from '../components/LimitButtons'
import { useAppSelector } from '../../../store/hooks/redux'
import { useDeleteProductMutation } from '../../../services'
import { useActions } from '../../../store/hooks/actions'
import Loader from '../../../components/Loader'
import Toggle from '../../../components/Toggle'
import { useSearchParams } from 'react-router-dom'

export default function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { products } = useAppSelector(state => state.fakestore)
  const [ deleteProduct, { isLoading, isSuccess, isError } ] = useDeleteProductMutation()
  const { removeProduct } = useActions()

  useEffect(() => {
    isSuccess && toast.success('Deleted!')
    isError && toast.error('Error. Not deleted!')
  }, [isSuccess, isError])

  const handleFilterChange = (key: string, value: number | boolean) => {
    setSearchParams(prev => (
      new URLSearchParams({
        ...Object.fromEntries(prev.entries()),
        ...{[key]: String(value)},
      })
    ))
  }

  const handleDelete = useCallback((id: string) => {
    if(window.confirm('Are sure want to delete?')) {
      removeProduct(id)
      // id = '1' to avoid fakestore api delete simulation error fro unknown id
      deleteProduct('1')
    } 
  }, [removeProduct, deleteProduct])

  const limit = Number(searchParams.get('limit') || 8)
  const arePublished = searchParams.get('arePublished') !== 'false'

  const productsForRender = useMemo(() => {
    const filteredProducts = products.filter(product => product.isPublished === arePublished)
    if (filteredProducts.length) {
      return filteredProducts
        .slice(0, limit)
        .sort((a, b) => a.price - b.price)
        .map(product => <ProductCard key={product.id} product={product} onDelete={handleDelete}/>) 
    }
    if (isLoading) return null
    return 'no items'
  }, [products, limit, handleDelete, arePublished, isLoading])

  return (
    <>
      {isLoading && <Loader />}
      <h1 
        className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl"
      >
        Created with form products
      </h1>
      <div className='flex items-center justify-between mb-5'>
        <Toggle checked={arePublished} labels={['not published', 'published']} onChange={(v) => handleFilterChange('arePublished' ,v)}/>
        <LimitButtons onChange={(v) => handleFilterChange('limit' ,v)} />
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        {productsForRender}
      </div>
    </>
  )
}