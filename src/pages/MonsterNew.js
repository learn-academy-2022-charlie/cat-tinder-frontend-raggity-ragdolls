import React, { Component } from 'react'
import '../css/monsterNew.css'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class MonsterNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      newMonster: {
      name: "",
      age: "",
      specialty: "",
      quote: "",
      image: "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let {newMonster} = this.state.newMonster[e.target.name] = e.target.value
    this.setState({newMonster: newMonster})
  }

  handleSubmit = () => {
    this.props.createMonster(this.state.newMonster)
    this.setState({submitted:true})
  }


  render() {

    return (
      
      <div id="formContainer">
        <h2>Lets scare someone</h2>
      <Form id="form">
            <FormGroup>
              <Label >
                Name
              </Label>
              <Input
                name="name"
                placeholder="Who are you?"
                
              />
            </FormGroup>
        <FormGroup>
          <Label>
            Age
          </Label>
          <Input
            name="age"
            placeholder="How old are you?"
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Specialty
          </Label>
          <Input
            name="specialty"
            placeholder="What are you known for?"
          />
        </FormGroup>
            <FormGroup>
              <Label>
                Quote
              </Label>
              <Input
                name="quote"
                placeholder="What have you said?"
              />
            </FormGroup>
            <FormGroup>
              <Label>
                Image
              </Label>
              <Input
                name="image"
                placeholder="What do you look like?"
              />
            </FormGroup>
        <Button onClick={this.handleSubmit} name='submit'>
          Create a Monster
        </Button>
        {this.state.submitted && <Redirect to="/monsterindex"/>}
      </Form>
      </div>
    )
  }
}
export default MonsterNew