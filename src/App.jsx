import React from 'react'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Categories from './components/CategoriesSection'
import Home from './views/Home'
import { useParams, useRoutes } from 'react-router-dom'
import Layout from './views/Layout'
import ProductDetail from './views/productDetails'
import Login from './views/login'
import Signup from './views/singup'
import Sellitem from './views/sellItem'
import Footer from './components/footer'

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
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
    {
      path: "/sellItem",
      element: <Sellitem  />,
    }
  ];
  let element = useRoutes(routes);
  const pathname = location.pathname
  // const pathname = useParams()
  console.log(pathname);
  return (
    <div >
      {
        pathname === "/login" || pathname === "/register" ? null : <Navbar />
      }

      {element}
      {
        pathname === "/login" || pathname === "/register" ? null : <Footer />
      }
    </div>
  )
}

export default App
