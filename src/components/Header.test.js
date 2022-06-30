import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
      let headerRender
      beforeEach(() => {
        headerRender = shallow(<Header/>)
      })
    it("displays a title with h1", () => {
      const headerTitleRender = headerRender.find("h1").text()
      expect(headerTitleRender).toEqual("Slasher™️")
    })
    it("displays a slogan with h2", () => {
      const headerTitleRender = headerRender.find("h2").text()
      expect(headerTitleRender).toEqual("Get your scare on")
    })
    it("displays NavLinks", () => {
      const navLink = headerRender.find("NavLink")
      expect(navLink.length).toEqual(2)
    })
  })