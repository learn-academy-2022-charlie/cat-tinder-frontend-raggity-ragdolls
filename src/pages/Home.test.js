import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
    let home
    beforeEach(() => {
      home = shallow(<Home />)
    })
    it("displays a div", () => {
      const homeHeading = home.find("div").text()
      expect(homeHeading).toEqual("Home")
    })
  })