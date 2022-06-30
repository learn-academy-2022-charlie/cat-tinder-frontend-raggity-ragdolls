import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from "./CatIndex.js";

Enzyme.configure({ adapter:new Adapter() })

describe("When CatIndex Renders", () => {
    const props = {
        cats: [
            {
                id: 1,
                name: "Mittens",
                age: 5,
                enjoys: "sunshine and warm spots",
                image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }
        ]
    }
    let catIndexRenderer
    beforeEach(() => {
        catIndexRenderer = shallow(<CatIndex {...props} />)
    })
    it("displays a header", () => {
        const catIndexHeading = catIndexRenderer.find("h1")
        expect(catIndexHeading.length).toEqual(1)
        expect(catIndexHeading.text()).toEqual("Here are all the Cats")
    })
    it("displays a card from ReactStrap per cat", () => {
        const catIndexCard = catIndexRenderer.find("Card")
        expect(catIndexCard.length).toEqual(1)
    })
    it("displays a navLink button", () => {
        const catIndexCard = catIndexRenderer.find("NavLink")
        expect(catIndexCard.length).toEqual(1)
    })
})