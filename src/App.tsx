import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import CreatePage from './pages/CreatePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import { ToastContainer } from 'react-toastify';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation/>
        <ToastContainer />
        <div className='pt-20 p-5 mx-auto max-w-[1300px] '>
          <Routes>
            <Route path='/' element={ <HomePage/> }/>
            <Route path='/create' element={ 
              <ProtectedRoute>
                <CreatePage />
              </ProtectedRoute> 
            }/>
            <Route path='/products' element={ 
              <ProtectedRoute>
                <ProductsPage />
              </ProtectedRoute>
             }/>
            <Route path='/products/:id' element={ 
              <ProtectedRoute>
                <ProductPage /> 
              </ProtectedRoute>
            }/>
            <Route path='/products/edit/:id' element={ 
              <ProtectedRoute>
                <EditPage /> 
              </ProtectedRoute>
            }/>
            <Route path='/login' element={ <LoginPage /> } />
            <Route path='*' element={ <HomePage/> }/>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
