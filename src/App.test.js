import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App.js'
import Home from './pages/Home'
Enzyme.configure({ adapter: new Adapter() })

describe("When App renders", () => {
  let renderedApp
  beforeEach(() => {
    renderedApp = shallow(<App />)
  })
  it("displays a Header", () => {
    const renderHeader = renderedApp.find("Header")
    expect(renderHeader.length).toEqual(1)
  })
  it("displays a Footer", () => {
  const renderFooter = renderedApp.find("Footer")
  expect(renderFooter.length).toEqual(1)
  })
  it("provides a path to the home component", () => {
  const renderPath = renderedApp.find("[path='/']")
  expect(renderPath.length).toEqual(1)
  expect(renderPath.props().component).toEqual(Home)
  })
})