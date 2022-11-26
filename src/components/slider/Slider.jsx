import "./slider.scss"
import { sliderItems } from "../../data"
import { useState } from "react"
import {NavLink} from "react-router-dom"

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0) ;

  const handleSlide = (operation)=>{
    if(operation=== "l"){
      setSlideIndex(slideIndex > 0 ?slideIndex -1 :sliderItems.length) ;
    }else{

      setSlideIndex(slideIndex<sliderItems.length ?slideIndex +1 : 0)
    }

  }
  return (
    <div className="sliderContainer" >
      <i class="fa-solid fa-circle-arrow-left" onClick={()=>handleSlide("l")}></i>
      <div className="slideWrapper">
   
       {sliderItems.map((item)=>(<div className="sliderItem" key={item.id} style={{transform:`translateX(${slideIndex * -100}vw)`, background:`#${item.bg}`}}>
          <div className="imgcontainer">
            <img src={item.img} alt="Loading..." className="sliderImg" /> 
          </div>
          <div className="infocontainer">
            <h2 className="title">{item.title} </h2>
            <p>{item.desc}</p>
            <NavLink to="/products">

            <button>SHOP NOW</button>
            </NavLink>
            
             </div>
        </div>
       )) 
   }
       
      </div>
      <i class="fa-solid fa-circle-arrow-right" onClick={() => handleSlide("r")}></i>



    </div>
  )
}

export default Slider