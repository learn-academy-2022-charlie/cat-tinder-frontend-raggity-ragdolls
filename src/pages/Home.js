import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay} from 'swiper';
import "../css/home.css"
import React, { Component } from 'react'
// Import Swiper styles
import 'swiper/css/bundle'

class Home extends Component {
render() {

return (
  <>
   <div className="container">
     <Swiper 
     modules={[Navigation, EffectCoverflow, Autoplay]}
       centeredSlides={true}
       centeredSlidesBounds={true}
       loop={true}
       navigation={false}
       slidesPerView={1}
       className="swiper1"
       autoplay={{
        delay: 3000,
        disableOnInteraction: false
    }}

     >
      <div className="swiperWrapper">
       {this.props.monster.map((value, index)=>{
         return(  <SwiperSlide className="swiper-slide1"key={index} onClick={()=>console.log('click')}>
                 <img src={value.image} alt={`${value.image}`} />
                 </SwiperSlide>
       )})}
       </div>
     </Swiper>
   </div>
  </>
)
}
}
export default Home