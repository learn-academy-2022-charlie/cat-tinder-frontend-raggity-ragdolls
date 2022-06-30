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


class CatShow extends Component {
  render() {
    const { cat } = this.props
    console.log("SHOW", cat)
    return (
      <>
        <h1>Here is a cat</h1>
        {cat && 
            <div id="cardContainer">
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
                <CardText>
                    {cat.enjoys}
                </CardText>
              </CardBody>
            </Card>
            </div>
        }
      </>
    )
  }
}
export default CatShow