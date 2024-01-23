import { useForm } from "react-hook-form"
import shayan from "../assets/shayan.jpg"
import { auth, logout } from "../config/firebase"
import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
const User = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    const signOut = async () => {
        const sign = await logout()

        if (sign) {
            setTimeout(() => {

                navigate('/')
            }, 1000)
        }
    }

    // const handleSubmit =()=>{

    // }
    const [previewImage, setPreviewImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user);
        //   setUser(user)
        })
      }, [])
    return (
        <div className='flex max-w-[1400px] mx-auto gap-10 mt-10'>
            <div className='w-[35%]  bg-white shadow-md drop-shadow-md px-2 py-10'>

                <img src={shayan} className="w-[140px] h-[140px] mx-auto border-[#23E5DB]   border-3 rounded-full" alt="" />
                <p className="font-bold text-[26px]  text-center mt-2">Shayan</p>
                <p className="text-[16px] text-center text-gray-500 font-semibold">Shayanhanif50@gmail.com</p>
                <p className="text-[20px] text-center   font-bold"> <span>Age</span> : 21</p>
                <div className="w-[90%] mx-auto mt-32">
                    <button className=" w-full  bg-[#000] text-white font-medium text-[22px] p-3 rounded-md ">Logout</button>
                    <button onClick={signOut} className=" w-full  bg-red-600 text-white font-medium text-[22px] p-3 rounded-md mt-2 ">Delete</button>

                </div>
            </div>
            <div className='w-[65%]  text-white'>
                <form className="flex  h-full flex-col justify-between "onSubmit={handleSubmit(async(data) => {
                    const image = data.image[0]
                    const { age,name } = data
                        console.log(image,name, age);
            })}>
                    <div className="mb-5 ">
                        <input type="text" {...register("name", { required: true })} placeholder="Full Name" className=" pr-4 w-full py-3 border-b border-solid border-[#0066ff3c] focus:outline-none focus:border-b-[#0067ff] text-[22px] leading-7 text-black placeholder:text-gray-500 cursor-pointer" required />
                    </div>
                    {/* <div className="mb-5">
                        <input type="email" placeholder="salman@gmail.com" className=" pr-4 w-full py-3 border-b border-solid border-[#0066ff3c] focus:outline-none focus:border-b-[#0067ff] text-[22px] leading-7 text-black placeholder:text-gray-500 cursor-pointer" readOnly aria-readonly required />
                    </div> */}

                    <div className="mb-5">
                        <input type="text" placeholder="Age" {...register("age", { required: true })} className=" pr-4 w-full py-3 border-b border-solid border-[#0066ff3c] focus:outline-none focus:border-b-[#0067ff] text-[22px] leading-7 text-black placeholder:text-gray-500 cursor-pointer" />
                    </div>


                    <div className="mb-5 flex items-center gap-3 ">
                        <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-[#0067ff] flex items-center justify-center ">
                            <img src={previewImage} className="w-full rounded-full" alt="" />
                        </figure>
                        <div className="relative w-[130px] h-[50px]  ">
                            <input type="file" {...register("image", { required: true })} onChange={handleImageChange} id="customFile" accept=".jpg, .png" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer " />
                            <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-black font-semibold rounded-lg truncate cursor-pointer ">
                                upload Photo
                            </label>
                        </div>

                    </div> 
                    <div className="mt-7 ">
                        <button type="submit" className=" bg-[#002F34] w-full rounded-lg px-4 py-3 text-[21px] leading-[30px]">Update</button>
                        {/* disabled={isLoading && true} */}
                    </div>
                    {/* value={formData.name} onChange={handleInputChange}  */}
                </form>
            </div>
        </div>
    )
}

export default User
