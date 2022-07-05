import React, { Component } from 'react'
import '../css/footer.css'

 class Footer extends Component {
  render() {
    return (
      <div id='container' className="boxshadow">
        <footer>
          <div id="footerText"> <a className="footerlink" href="https://github.com/vjtovar" target="_blank">Valerie</a> and 
          <a className="footerlink" href="https://github.com/SOMarrah" target="_blank"> Stephen</a></div>
          
        </footer>
      </div>
    )
  }
}

export default Footer