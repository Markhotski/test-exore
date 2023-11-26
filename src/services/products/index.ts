import { IProduct,  } from '../../models'
import { baseApi } from '../setup'

export const productsApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<IProduct[], {limit: number, sort: string}>({
      query: ({limit, sort}) => ({
        url: '/products',
        params: {
          limit,
          sort
        }
      })
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
      })
    }),
    createProduct: builder.mutation<IProduct, Omit<IProduct, 'id'>>({
      query: (data) => ({
        url: '/products',
        method: 'POST',
        body: data,
      }),
    }),
    updateProduct: builder.mutation<IProduct, IProduct>({
      query: (data) => ({
        url: `/products/${data.id}`,
        method: 'PUT',
        body: {...data, id: undefined},
      }),
    }),
    deleteProduct: builder.mutation<IProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),
    }),
  })
})

export const { 
  useGetProductsQuery, 
  useGetProductQuery, 
  useCreateProductMutation, 
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi