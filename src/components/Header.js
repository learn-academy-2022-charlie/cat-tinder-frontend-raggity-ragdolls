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
            <NavLink to='/monsterindex'>
            <p>All Monsters</p>
            </NavLink>
            <NavLink to='/monsternew'>
            <p>Make a New Monster</p>
            </NavLink>
            
        </header>
      </div>
    </>

    )
  }
}

export default Header