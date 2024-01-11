import animal from "../../assets/animal.png"
import bikes from "../../assets/bikes.png"
import books from "../../assets/books.png"
import business from "../../assets/business.png"
import electronics from "../../assets/electronics.png"
import fashion from "../../assets/fashion.png"
import furniture from "../../assets/furniture.png"
import jobs from "../../assets/jobs.png"
import kids from "../../assets/kids.png"
import mobiles from "../../assets/mobiles.png"
import propertyRent from "../../assets/propertyRent.png"
import propertySale from "../../assets/propertySale.png"
import services from "../../assets/services.png"
import vehicels from "../../assets/vehicels.png"
const Categories = () => {
    const categories = [
        {name:"Mobiles", img:mobiles},
        {name:"Vehicels", img:vehicels},
        {name:"Property For sale", img:propertySale},
        {name:"Property For Rent", img:propertyRent},
        {name:"Electronics & Home Appliances", img:electronics},
        {name:"Bikes", img:bikes},
        {name:"Business, Industrial & Agriculture", img:business},
        {name:"Services", img:services},
        {name:"Jobs", img:jobs},
        {name:"Animals", img:animal},
        {name:"Furniture & Home Decor", img:furniture},
        {name:"Fashion & Beauty", img:fashion},
        {name:"Books, Sports & Hobbies", img:books},
        {name:"Kids", img:kids},
    ]
  return (
    <div className='max-w-[1400px] mx-auto mt-8'>
        <h2>All Categories</h2>
        <div>
            {
                categories.map((item)=>(
                    <div>
                        <img src={item.img} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories
