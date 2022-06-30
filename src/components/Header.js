import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import '../css/header.css'


class Header extends Component {
  render() {
    return (

    <>
    <div id="headerContainer">
        <header>
          <NavLink to='/'>
            <h1>
                Slasher™️
            </h1>
            </NavLink>
            <h2>
                Get your scare on
            </h2>
            <NavLink to='/catindex'>
            <p>All Cats</p>
            </NavLink>
            
        </header>
      </div>
    </>

    )
  }
}

export default Header