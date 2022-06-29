import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './NotFound'
import NotFound from './NotFound'
Enzyme.configure({adapter: new Adapter()})

describe("displays and h2 title and an image", () => {
    let notFound
    beforeEach(() => {
      notFound = shallow(<NotFound />)
    })
    it("displays an h2 title and an image", () => {
      const notFoundTitle = notFound.find("h2")
      expect(notFoundTitle.length).toEqual(1)
      const notFoundImg = notFound.find("img")
      expect(notFoundImg.length).toEqual(1)
    })
  })