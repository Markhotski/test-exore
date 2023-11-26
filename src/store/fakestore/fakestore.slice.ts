import { IProduct } from "../../models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit' 

const LOCAL_STORAGE_KEY = 'test_exore_products'

interface State {
  products: IProduct[];
}

const initialState: State = {
  products: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]')
} 

export const fakestoreSlice = createSlice({
  name: 'fakestore',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<IProduct>) {
      state.products.push(action.payload)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.products))
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter(product => product.id !== action.payload)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.products))
    },
    editProduct(state, action: PayloadAction<IProduct>) {
      state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.products))
    }
  }
})

export const fakestoreActions = fakestoreSlice.actions
export const fakestoreReducer = fakestoreSlice.reducer