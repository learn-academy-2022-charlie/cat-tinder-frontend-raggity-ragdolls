import React, { Component } from 'react'
import '../css/monsterNew.css'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap'


class MonsterNew extends Component {
  render() {
    return (
      <div id="formContainer">
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
            Specialty / Power
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
        <Button>
          Sign in
        </Button>
      </Form>
      </div>
    )
  }
}
export default MonsterNew