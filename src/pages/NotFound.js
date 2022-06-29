import React, { Component } from 'react'
import notFound from "../assets/scream-movie-mask-face.webp"
import '../css/notFound.css'

class NotFound extends Component {
  render() {
    return (
      <>
      <div id="notFoundContainer">
        <img id="notFoundImg" src={notFound} alt="Not Found"/>
        <p id="notFoundText">Wrong Turn</p>
      </div>
      
      </>
    )
  }
}
export default NotFound