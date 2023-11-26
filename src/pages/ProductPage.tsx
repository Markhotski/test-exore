import React from 'react'
import ProductView from '../modules/products/fromApi/ProductView';

export default function ProductPage() {

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      <ProductView />
    </div>
  )
}
