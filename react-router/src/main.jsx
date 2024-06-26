import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './componenents/Home/Home'


const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children : [
      {
        path: "",
        children: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider  router={router}/>
  </React.StrictMode>
)
