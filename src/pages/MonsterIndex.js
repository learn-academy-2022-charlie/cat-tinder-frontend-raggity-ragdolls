import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText
} from 'reactstrap'
import '../css/monsterIndex.css'

class MonsterIndex extends Component {
  render() {
    const { monsters } = this.props
    console.log("INDEX", monsters)
    return (
      <>
        <h1>Here are all the monsters</h1>
        {monsters && monsters.map((monster, index)=>{
          return(
            <div key={index} id="cardContainer">
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
                <NavLink to={`/monstershow/${monster.id}`}>
                <Button>
                  Check meowt
                </Button>
                </NavLink>
              </CardBody>
            </Card>
            </div>
          )
        })}
      </>
    )
  }
}
export default MonsterIndex