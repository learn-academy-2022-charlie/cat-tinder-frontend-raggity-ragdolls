import React from "react";
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonsterIndex from "./monsterIndex.js";

Enzyme.configure({ adapter:new Adapter() })

describe("When monsterIndex Renders", () => {
    const props = {
        monsters: [
            {
                id: 1,
                name: "Mittens",
                age: 5,
                enjoys: "sunshine and warm spots",
                image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }
        ]
    }
    let monsterIndexRenderer
    beforeEach(() => {
        monsterIndexRenderer = shallow(<MonsterIndex {...props} />)
    })
    it("displays a header", () => {
        const monsterIndexHeading = monsterIndexRenderer.find("h1")
        expect(monsterIndexHeading.length).toEqual(1)
        expect(monsterIndexHeading.text()).toEqual("Here are all the monsters")
    })
    it("displays a card from ReactStrap per monster", () => {
        const monsterIndexCard = monsterIndexRenderer.find("Card")
        expect(monsterIndexCard.length).toEqual(1)
    })
    it("displays a navLink button", () => {
        const monsterIndexCard = monsterIndexRenderer.find("NavLink")
        expect(monsterIndexCard.length).toEqual(1)
    })
})