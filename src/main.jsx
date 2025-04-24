import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Body from './Layout/Body.jsx'
import ProductsDetails from './Components/ProductsDetails/ProductsDetails.jsx'
import Products from './Components/Products/Products.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <Body></Body>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/products',
      element: <Products></Products>
    },
    {
      path: '/:id',
      element: <ProductsDetails></ProductsDetails>,
      loader: () => fetch('https://admin.refabry.com/api/all/product/get')

    }
  ]


}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
