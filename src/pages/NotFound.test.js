import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound.js'
Enzyme.configure({adapter: new Adapter()})

describe("displays an error page and an image", () => {
    let notFound
    beforeEach(() => {
      notFound = shallow(<NotFound />)
    })
    it("displays error page", () => {
      const errorMessage = notFound.find("p").text()
      expect(errorMessage).toEqual("Wrong Turn")
  })
    it("displays an image", () => {
      const notFoundImg = notFound.find("img")
      expect(notFoundImg.length).toEqual(1)
    })
  })