import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MonsterNew from './MonsterNew.js'

Enzyme.configure({ adapter: new Adapter() })

describe('When MonsterNew renders', ()=> {
    let monsterNewRender
    beforeEach(()=>{
        monsterNewRender = shallow(<MonsterNew/>)
    })
    it("displays a heading", ()=>{
        const monsterNewHeading = monsterNewRender.find("h2")
        expect(monsterNewHeading.length).toEqual(1)
        expect(monsterNewHeading.text()).toEqual("Lets scare someone")
    })
    it("displays a form", ()=>{
        const monsterNewForm = monsterNewRender.find("Form")
        expect(monsterNewForm.length).toEqual(1)
    })
    it("displays an input for a monster name", ()=>{
        const monsterNewNameInput= monsterNewRender.find('[name="name"]')
        expect(monsterNewNameInput.length).toEqual(1)
    })
    it("displays an input for a monster age", ()=>{
        const monsterNewAgeInput= monsterNewRender.find('[name="age"]')
        expect(monsterNewAgeInput.length).toEqual(1)
    })
    it("displays an input for a monster specialty", ()=>{
        const monsterNewSpecialtyInput= monsterNewRender.find('[name="Specialty"]')
        expect(monsterNewSpecialtyInput.length).toEqual(1)
    })
    it("displays an input for a monster quote", ()=>{
    const monsterNewQuoteInput= monsterNewRender.find('[name="quote"]')
    expect(monsterNewQuoteInput.length).toEqual(1)
    })
    it("displays an input for a monster image", ()=>{
        const monsterNewImageInput= monsterNewRender.find('[name="image"]')
        expect(monsterNewImageInput.length).toEqual(1)
    })
})