import React, { useEffect, useState } from 'react'
import olxBlue from "../../assets/olx-blue.png"
import olxblck from "../../assets/olx-black.png"
import sellBtn from "../../assets/sellBtn.png"
import { IoCarSportOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import { IoChevronDown } from "react-icons/io5";
import shayan from "../../assets/shayan.jpg"
import { IoIosSearch } from "react-icons/io";

import "./index.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, getUser } from '../../config/firebase';
const Navbar = () => {
    const miniNAvbar = ["Mobile Phones", "Cars", "Motorcycles", "Houses", "Video-Audios", "Tablets", "Land Plots"]
    const [userr, setUser] = useState()
    console.log(userr);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if(user){
                const data = await getUser(user.uid)

                setUser(data)
            }
        })
    }, [])
    return (
        <div className='border-b  shadow-sm'>
            <div className='bg-[#F7F8F8]'>
                <div className='max-w-[1400px] mx-auto'>
                    {/* upper navbar start */}
                    <div className='flex gap-10 py-[10px]'>
                        <div>
                            <Link to={'/'}>
                                <img src={olxBlue} width={"32"} height={20} alt="" /></Link>
                        </div>
                        <div className='flex items-center gap-3 hover:text-[#3A77FF] cursor-pointer'>
                            <div className='gradient rounded-full'>
                                <IoCarSportOutline size={20} />
                            </div>
                            <p className='text-[12px] font-[500]'>
                                MOTORS
                            </p>
                        </div>
                        <div className='flex items-center gap-3 hover:text-[#3A77FF] cursor-pointer'>
                            <div className='gradient rounded-full'>
                                <BsBuildings size={20} />
                            </div>
                            <p className='text-[12px] font-[500]'>
                                PROPERTY
                            </p>
                        </div>
                    </div>
                    {/* upper navbar end */}

                    {/* lower navbar start*/}
                    <div className='py-[10px] grid grid-cols-12 justify-center gap-7 items-center'>
                        <div className='col-span-1'>
                            <Link to={'/'}> <img src={olxblck} width={"61"} height={20} alt="" /></Link>
                        </div>
                        <div className='col-span-3 flex items-center bg-white py-[14px] rounded-[4px]  border-solid border-black border-[2px]'>
                            <div className=' ml-[0.8rem] '>
                                <IoIosSearch size={20} />
                            </div>

                            <div className='w-[80%] pl-3'>

                                <select className='w-full text-[18px]' >
                                    <option value="">PAKISTAN</option>
                                    <option value="">Location</option>
                                    <option value="">Location</option>
                                </select>
                            </div>
                        </div>
                        <div className='relative flex col-span-6 bg-white  rounded-[4px]  border-solid border-black border-[2px]'>

                            <input type="text" className='px-[12px] placeholder:text-gray-600 w-full border-none py-3' placeholder='Find Cars, Mobile Phones and more...' />
                            <button className='absolute flex items-center px-2 cur right-0 top-0 bottom-0 bg-[#002F34]'>
                                <IoIosSearch size={30} color={"white"} />

                            </button>

                        </div>
                        <div className='col-span-1 flex justify-center'>

                            {

                                userr ? 
                                <h2>{userr.fullName}</h2>
                                // <Link to={"/user/profile/me"}>
                                //     <img className='w-[40px] rounded-full cursor-pointer' src={userr.profilePic} alt="" /></Link>
                                     :
                                    <Link to={"/login"} className=' font-bold  pb-2 text-center login'>LOGIN</Link>

                            }
                        </div>
                        <div className='col-span-1 '>
                            <Link to={'/sellItem'}>
                                <div className='relative '>
                                    <img src={sellBtn} className='mx-auto' />
                                    <div className='absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center gap-1 text-black'>
                                        <TiPlus size={20} />
                                        <p className='font-bold'>SELL</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='max-w-[1400px] mx-auto flex items-center'>
                <h3 className='font-semibold flex items-center gap-1 text- '>All Categories<span className='font-light'><IoChevronDown size={30} /></span></h3>
                <div className='flex gap-3 ml-4 py-3 '>

                    {
                        miniNAvbar.map((item, i) => (
                            <p key={i} className='text-[15px] hover:text-[#00a49f] cursor-pointer'>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Navbar
