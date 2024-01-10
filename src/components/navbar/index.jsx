import React from 'react'
import olxBlue from "../../assets/olx-blue.png"
import { IoCarSportOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";

const Navbar = () => {
    return (
        <div className='bg-[#F7F8F8] p-3'>

            <div className='max-w-[1400px] mx-auto'>
                {/* upper navbar start */}
                <div className='flex gap-10'>
                    <div>
                        <img src={olxBlue} width={"32"} height={20} alt="" />
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoCarSportOutline />
                        MOTORS
                    </div>
                    <div className='flex items-center gap-3'>
                        <BsBuildings  />
                        property</div>
                </div>
                {/* upper navbar end */}
            </div>
        </div>
    )
}

export default Navbar
