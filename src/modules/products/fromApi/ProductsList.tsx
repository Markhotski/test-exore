import React from 'react'
import ProductCard from './components/ProductCard'
import LimitButtons from '../components/LimitButtons'
import { useGetProductsQuery } from '../../../services'
import Loader from '../../../components/Loader'
import Toggle from '../../../components/Toggle'
import { useSearchParams } from 'react-router-dom'

export default function ProductsList() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleLimitChange = (value: number) => {
    setSearchParams(prev => (
      new URLSearchParams({
        ...Object.fromEntries(prev.entries()),
        ...{limit: String(value)},
      })
    ))
  }

  const handleSortChange = (value: boolean) => {
    setSearchParams(prev => (
      new URLSearchParams({
        ...Object.fromEntries(prev.entries()),
        ...{sort: value ? 'asc' : 'desc'},
      })
    ))
  }

  const isAscSort = searchParams.get('sort') !== 'desc'
  
  const { isLoading, data, isError} = useGetProductsQuery({
    limit: Number(searchParams.get('limit') || 8), 
    sort: searchParams.get('sort') || 'asc'
  })

  return (
    <>
      <h1 
        className="my-8 text-4xl font-extrabold leading-none tracking-tight text-gray-700 md:text-5xl"
      >
        Products from api
      </h1>
      { isError && <span className='text-center text-red-600'>Something went wrong...</span> }
      { isLoading && <Loader /> }
      <div className='flex items-center justify-between mb-5'>
        <Toggle checked={isAscSort} labels={['desc', 'asc']} onChange={handleSortChange}/>
        <LimitButtons onChange={handleLimitChange} />
      </div>
      <div className='flex flex-wrap justify-center gap-5'>
        { 
          data?.length? 
            data.map(product => <ProductCard key={product.id} product={product}/>) 
            : !isLoading && 'no items'
        }
      </div>
    </>
  )
}