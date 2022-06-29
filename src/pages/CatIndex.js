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
import '../css/catIndex.css'

class CatIndex extends Component {
  render() {
    const { cats } = this.props
    console.log("INDEX", cats)
    return (
      <>
        <h1>Here are all the Cats</h1>
        {cats && cats.map((cat, index)=>{
          return(
            <div key={index} id="cardContainer">
            <Card id='cards' >
              <CardImg
                alt="Card image cap"
                src={cat.image}
                top
                width="25%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Hello, my name is {cat.name}
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Age: {cat.age}
                </CardSubtitle>
                <Button>
                  Check meowt
                </Button>
              </CardBody>
            </Card>
            </div>
          )
        })}
      </>
    )
  }
}
export default CatIndex