import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/CategoriesSection'
import Card from '../../components/Card'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                console.log(res.products);
                setProducts(res.products)
            })
    }, [])
    return (
        <div>
            <Banner />
            <Categories />
            <div className='max-w-[1400px] mx-auto mt-20'>
                <div className='flex flex-wrap gap-6'>

                    {
                        products.map((product) => (
                            <Card brand={product.brand} category={product.category} desc={product.description} id={product.id} images={product.images} price={product.price} rating={product.rating} thumbnail={product.thumbnail} title={product.title} />

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
