import { ILoginResponse, IUserLogin } from '../../models'
import { baseApi } from '../setup'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, IUserLogin>({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data
      })
    })
  })
})

export const { 
  useLoginMutation,
} = authApi