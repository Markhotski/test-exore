import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'
import { IProduct } from '../../../../models'

interface Props {
  product: IProduct
}

export default function ProductCard({product}: Props) {
  return (
    <Link to={`/products/${product.id}`} className="w-full flex flex-col max-w-[300px] bg-white border border-gray-200 rounded-lg shadow">
      <img className="p-8 rounded-t-lg flex mx-auto object-contain h-[300px]" src={product?.image ?? "no-image.png"} alt="product image" />
      <div className="px-5 pb-5 flex flex-col justify-between grow">
        <div>
          <h5 className="text-xl font-semibold tracking-tight line-clamp-3 text-gray-900">{product.title}</h5>
          <div className="flex items-center mt-2.5 mb-5">
            <Rating rating={product.rating}/>
          </div>
        </div>
        <span className="text-3xl font-bold text-gray-900">${product.price}</span>
      </div>
    </Link>
  )
}
