import React, { Component } from 'react'
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

import '../css/header.css'


class Header extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }
  toggle(){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {  
    return (

    <>
    <div id="headerContainer">
        <header>
          <NavLink to='/'>
            <h1 id="headerTitle">
                Slasher
            </h1>
            </NavLink >
            <div id="dropdownContainer">
            <Dropdown direction="down" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle id='dropdownBtn' caret>
                  Get your scare on
                </DropdownToggle>
                <DropdownMenu container="body">
                  <DropdownItem>
                  <NavLink className='navLinkText' to='/monsterindex'>
                  <p >All Monsters</p>
                  </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                  <NavLink className='navLinkText' to='/monsternew'>
                  <p >Make a New Monster</p>
                  </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
        </header>
      </div>
    </>

    )
  }
}

export default Header