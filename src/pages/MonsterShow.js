import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText
} from 'reactstrap'


class MonsterShow extends Component {
  render() {
    const { monster } = this.props
    console.log("SHOW", monster)
    return (
      <>
        <h1>Here is a monster</h1>
        {monster && 
            <div id="cardContainer">
            <Card id='cards' >
              <CardImg
                alt="Card image cap"
                src={monster.image}
                top
                width="25%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Hello, my name is {monster.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Age: {monster.age}
                </CardSubtitle>
                <CardText>
                    {monster.specialty}
                </CardText>
                <CardText>
                    {monster.quote}
                </CardText>
              </CardBody>
            </Card>
            </div>
        }
      </>
    )
  }
}
export default MonsterShow