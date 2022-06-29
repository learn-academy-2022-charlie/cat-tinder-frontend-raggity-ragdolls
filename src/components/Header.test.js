import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
Enzyme.configure({adapter: new Adapter()})

describe("When Header renders", () => {
      let headerRender
      beforeEach(() => {
        headerRender = shallow(<Header/>)
      })
    it("displays 3 navlinks", () => {
      const navLink = headerRender.find("navLink")
      expect(navLink.length).toEqual(3)
    })
  })