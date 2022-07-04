import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText
} from 'reactstrap'
import { Swiper, SwiperSlide,} from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow} from 'swiper';
import '../css/monsterIndex.css'
import 'swiper/css/bundle'

class MonsterIndex extends Component {
  render() {
    const { monsters } = this.props
    console.log("INDEX", monsters)
    return (
      <>
        <h1>Here are all the monsters</h1>
        <div id="cardContainer">
        <Swiper 
         modules={[Navigation, EffectCoverflow, Pagination]}
         pagination
       centeredSlides={true}
       centeredSlidesBounds={true}
       loop={true}
       navigation={false}
       slidesPerView={3}
       spaceBetween={20}
       className="monsterIndex"
     >
    
       {this.props.monsters.map((monster, index)=>{
         return(  <SwiperSlide className="swiper-slide2"key={index} onClick={()=>console.log('click')}>
                  <Card className='cards' >
              <CardImg
                alt="Card image cap"
                src={monster.image}
              />
              <CardBody>
                <CardTitle tag="h5">
                  Hello, my name is {monster.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Age: {monster.age}
                </CardSubtitle>
                <NavLink to={`/monstershow/${monster.id}`}>
                <Button>
                  Check out
                </Button>
                </NavLink>
              </CardBody>
            </Card>
                 </SwiperSlide>
       )})}
     </Swiper>
        </div>
      </>
    )
  }
}
export default MonsterIndex