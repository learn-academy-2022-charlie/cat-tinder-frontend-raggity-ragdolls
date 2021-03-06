import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer.js'
Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
    let footer
    beforeEach(() => {
      footer = shallow(<Footer />)
    })
    it("displays two divs", () => {
      const footerRender = footer.find("div")
      expect(footerRender.length).toEqual(2)
    })
  })
