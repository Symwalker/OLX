import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import shayan from "../../assets/shayan.JPG"
const ProductDetail = () => {
    const [product, setProduct] = useState()
    console.log(product);
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((res) => {
                setProduct(res)
            })
    }, [])
    if (!product) {
        return <h1>Loading</h1>
    }
    return (
        <div className='mt-10'>
            <div className='max-w-[1400px] mx-auto flex '>
                <div className='h-[500px] w-[70%]'>
                    <img src={product.images[0]} className='h-full object-cover' alt="" />
                </div>
                <div className='border border-gray-400 w-[30%]'>
                    <div className='flex p-3 gap-3 '>
                        <img src={shayan} width={70} className='rounded-full ' />
                        <div className='flex flex-col justify-between '>
                            <p>Shayan</p>
                            <p>Member since Mar 2023</p>
                            <p>See Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
