import React, { Component } from 'react'
import { Card, CardImg,CardBody, CardTitle, CardSubtitle, Button, CardText} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import '../css/monsterShow.css'



class MonsterShow extends Component {

  render() {
    const { monster } = this.props
    console.log("SHOW", monster)
    return (
      <>
        <h1>Here is a monster</h1>
        <div id="showCardContainer">
        {monster && 
            <Card id='showCards' >
              <CardImg
                alt="Card image cap"
                src={monster.image}
                id="showImage"
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
                
                <NavLink to={`/monsteredit/${monster.id}`}>
                <Button className='showButton'>
                  Edit Monster
                </Button>
                </NavLink>
                
                <NavLink to={"/monsterindex"}>
                <Button  className='showButton' onClick={() => this.props.deleteMonster(monster.id)}>
                  Delete Monster
                </Button>
                </NavLink>
                
              </CardBody>
            </Card>
        }
        </div>
      </>
    )
  }
}
export default MonsterShow