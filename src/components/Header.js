import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import '../css/header.css'


class Header extends Component {
  render() {
    return (

    <>
    <div id="headerContainer">
        <header>
            <h1>
                Slasher™️
            </h1>
            <h2>
                Get your scare on
            </h2>
        </header>
      </div>
    </>

    )
  }
}

export default Header