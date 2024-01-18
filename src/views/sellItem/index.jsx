import { useState } from "react"
import "./index.css"
import { addItem } from "../../config/firebase"
import { Toaster } from "react-hot-toast"
const Sellitem = () => {
  const [brand, setBrand] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()

  const handleSubmit = async () => {
    await addItem({ brand, title, description, category, price })
    
  }
  return (
    <div className='max-w-[1000px] mx-auto mt-10'>
       <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <h2 className='text-[32px] mb-2 font-bold '>
        Want to Sell Items...
      </h2>
      <div className=' rounded-md bg py-5 px-5 flex flex-col gap-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="" className="text-white font-bold">Brand</label>
          <input onChange={(e) => setBrand(e.target.value)} className='px-3 py-2 rounded-md text-[20px] outline-none' type="text" placeholder='Brand' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="" className="text-white font-bold">Title</label>
          <input onChange={(e) => setTitle(e.target.value)} className='px-3 py-2 rounded-md text-[20px] outline-none' type="text" placeholder='Title' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="" className="text-white font-bold">Category</label>
          <input onChange={(e) => setCategory(e.target.value)} className='px-3 py-2 rounded-md text-[20px] outline-none' type="text" placeholder='Category' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="" className="text-white font-bold">Price</label>
          <input onChange={(e) => setPrice(e.target.value)} className='px-3 py-2 rounded-md text-[20px] outline-none' type="text" placeholder='Price' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="" className="text-white font-bold">Description</label>
          <input onChange={(e) => setDescription(e.target.value)} className='px-3 py-2 rounded-md text-[20px] outline-none' type="text" placeholder='Description' />
        </div>


        <button onClick={handleSubmit} className="bg-white px-2 py-2 transition-all duration-200 hover:bg-[#ecebeb] w-1/3 mt-3  rounded-md text-[18px] font-bold">Add Product</button>
      </div>
    </div>
  )
}

export default Sellitem
