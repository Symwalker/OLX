import React from 'react'
import Cards from './components/Cards'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Categories from './components/CategoriesSection'

const App = () => {
  return (
    <div >
        <Navbar/>
        <Banner/>
        <Categories/>
      <Cards/>
    </div>
  )
}

export default App
