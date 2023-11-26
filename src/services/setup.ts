import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  reducerPath: 'fakestore/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com'
  }),
  endpoints: () => ({})
})