import { BsStar, BsStarFill } from "react-icons/bs";
import img from "../../assets/mob.jpeg"
import { IoIosHeartEmpty } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";

const Card = ({ brand, price, category, id, desc, images, rating, title, thumbnail, wProduct }) => {

  const navigate = useNavigate()
  // console.log(images);
  const dispatch = useDispatch()
  const handleCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div key={id} className='w-[332px] min-h-[510px] h-auto relative border-gray-300 border-[3px] rounded-[4px]' >
      <img onClick={() => navigate(`/product/${id}`)} src={thumbnail} className="h-[50%] w-full rounded-tr-[3px] rounded-tl-[3px]  object-cover object-top" alt="" />
      <div className=" px-4 py-4  w-full border-t-[3px] h-[50%] rounded-[4px]">
        <div className="flex justify-between">

          <p className="text-[21px] font-[650]">RS {price}</p>
          <IoIosHeartEmpty className={'cursor-pointer'} size={25} />
        </div>
        <p className="text-[21px] font-[450] pt-3">{brand} {title}</p>
        <p className="text-[19px] font-[450] ">rpad karachi</p>
        <p className="text-[18px] font-[450] py-3 flex gap-3 items-center ">{rating} <BsStarFill className={"text-amber-400"} /></p>
        <button onClick={() => handleCart(wProduct)} className="py-2 px-4 hover:bg-black absolute bottom-3 left-3 font-semibold text-[14px]  text-white rounded-[6px] bg-gray-800">Add to Cart</button>
      </div>
    </div>

  )
}

export default Card
