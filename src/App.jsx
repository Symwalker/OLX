import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Categories from './components/CategoriesSection'
import Home from './views/Home'
import { useRoutes } from 'react-router-dom'
import Layout from './views/Layout'
import ProductDetail from './views/productDetails'

const App = () => {
  let routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
      ]
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    }
  ];
  let element = useRoutes(routes);
  return (
    <div >
      <Navbar />

      {element}
    </div>
  )
}

export default App
