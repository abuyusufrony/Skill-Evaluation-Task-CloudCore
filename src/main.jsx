import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home/Home.jsx'
import Body from './Layout/Body.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <Body></Body>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    }
  ]


}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
