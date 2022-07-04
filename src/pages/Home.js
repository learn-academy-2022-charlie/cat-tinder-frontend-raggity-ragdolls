import React, { Component } from 'react'
import { Carousel, CarouselItem, CarouselIndicators, CarouselControl  } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../css/home.css"

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
        activeIndex: 0
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
}

onExiting(){
    this.animating = true
}
onExited(){
    this.animating = false
}
next(){
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === this.props.monster.length - 1 ? 0 : this.state.activeIndex + 1;
  this.setState({
    activeIndex: nextIndex
  });
}
previous(){
  if (this.animating) return;
  const nextIndex = this.state.activeIndex === 0 ? this.props.monster.length - 1 : this.state.activeIndex - 1;
  this.setState({
    activeIndex: nextIndex
  });
}

goToIndex(newIndex){
  if (this.animating) return;
  this.setState({
    activeIndex: newIndex
  });

}

render() {
const {activeIndex} = this.state
const {monster} = this.props
return (
  <>
    <div id="carouselHomePage" >
    <Carousel
    activeIndex={activeIndex}
    next={this.next}
    previous={this.previous}
    children={[0]}
    >
    <CarouselIndicators
      items={monster}
      activeIndex={activeIndex}
      onClickHandler={this.goToIndex}
    />
    {monster && monster.map((value, index) => {
      return (
        
        <CarouselItem
        className="carouselItem"
        onExiting = {() => this.onExiting}
        onExit = {() => this.onExited}
        key = {index}
        ><div className="imgContainer">
          <img className="carouselImages" src={value.image}/>
          </div>
        </CarouselItem>
      )
    })}
    
    <CarouselControl
      direction="prev"
      directionText="Previous"
      onClickHandler={this.previous}
    />
    <CarouselControl
      direction="next"
      directionText="Next"
      onClickHandler={this.next}
    />
  </Carousel>
  </div>
  </>
)
}
}
export default Home