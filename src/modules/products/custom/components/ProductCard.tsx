import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../../../models';

interface Props {
  product: IProduct;
  onDelete: (id: string) => void;
}

export default function ProductCard({product, onDelete}: Props) {
  return (
  <div className="w-full flex flex-col justify-between max-w-[300px] bg-white border border-gray-200 rounded-lg shadow p-5">
    <div>
      <h5 className="mb-4 text-3xl font-bold text-gray-900 line-clamp-1">{product.title}</h5>
      <span className='mb-4 text-xl font-medium text-gray-600 line-clamp-3'>{product.description}</span>
    </div>
    <div>
      <div className='flex items-center justify-between mb-2 '>
        <span className='mb-2 text-xl font-medium text-gray-900 line-clamp-1'>{product.isPublished ? 'published' : 'not published'}</span>
        <span className='text-xl font-medium text-gray-900 line-clamp-1'>{new Date(product.createdAt ?? '').toLocaleDateString()}</span>
      </div>
      <div className="mb-4 flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-3xl font-extrabold tracking-tight">{product.price}</span>
      </div>
      <div className='flex justify-between gap-2 '>
        <button onClick={() => onDelete(product.id)} type='button' className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Delete</button>
        <Link to={`/products/edit/${product.id}`} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Edit</Link>
      </div>
    </div>
  </div>
  )
}
