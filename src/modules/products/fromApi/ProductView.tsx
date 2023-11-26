import React from 'react'
import { useParams } from "react-router-dom";
import Loader from '../../../components/Loader';
import Rating from './components/Rating';
import { useGetProductQuery } from '../../../services';

export default function ProductView() {
  const { id } = useParams();
  const { isError, isLoading, data } = useGetProductQuery(id!)

  return (
    <>
      { isError && <span className='text-center text-red-600'>Something went wrong...</span> }
      { isLoading && <Loader /> }
      { data && 
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-24 mx-auto ">
            <div className="mx-auto flex flex-wrap justify-center">
              <img 
                src={data.image}
                alt={data.title} 
                className="w-full mx-auto lg:mx-0 max-w-[300px] object-content object-center rounded border border-gray-200" 
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
                <div className="mb-4">
                  <Rating rating={data.rating} />
                </div>
                <p className="leading-relaxed mb-4">{data.description}</p>
                <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  )
}
