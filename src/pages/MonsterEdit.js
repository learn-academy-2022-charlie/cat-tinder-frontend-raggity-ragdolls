import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class MonsterEdit extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      editMonster: {
      name: this.props.monster ? this.props.monster.name : "",
      age: this.props.monster ? this.props.monster.age : "",
      specialty: this.props.monster ? this.props.monster.specialty : "",
      quote: this.props.monster ? this.props.monster.quote : "",
      image: this.props.monster ? this.props.monster.image : "",
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let {editMonster} = this.state
    editMonster[e.target.name] = e.target.value
    this.setState({editMonster: editMonster})
  }

  handleSubmit = () => {
    this.props.updateMonster(this.state.editMonster, this.props.id)
    this.setState({submitted:true})
  }


  render() {
    // const { monster } = this.props
    return (
      <>
      
        <div id="formContainer">
        <h2>Lets scare someone</h2>
      <Form id="form">
            <FormGroup>
              <Label for="name">
                Name
              </Label>
              <Input
                name="name"
                placeholder={this.props.monster.name}
                onChange={this.handleChange}
                value={this.state.name}
              />
            </FormGroup>
        <FormGroup>
          <Label for="age">
            Age
          </Label>
          <Input
            name="age"
            placeholder={this.props.monster.age}
            onChange={this.handleChange}
            value={this.state.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="specialty">
            Specialty
          </Label>
          <Input
            name="specialty"
            placeholder={this.props.monster.specialty}
            onChange={this.handleChange}
            value={this.state.specialty}
          />
        </FormGroup>
            <FormGroup>
              <Label for="quote">
                Quote
              </Label>
              <Input
                name="quote"
                placeholder={this.props.monster.quote}
                onChange={this.handleChange}
                value={this.state.quote}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">
                Image
              </Label>
              <Input
                name="image"
                placeholder={this.props.monster.image}
                onChange={this.handleChange}
                value={this.state.image}
              />
            </FormGroup>
        <Button onClick={this.handleSubmit} name='submit'>
          Edit this Monster
        </Button>
        {this.state.submitted && <Redirect to="/monsterindex"/>}
      </Form>
      </div>
    </>
    )
  }
}
export default MonsterEdit