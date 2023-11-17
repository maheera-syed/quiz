import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Cards = () => {
  return (
    <div>
      <Card
        style={{ width: '18rem', backgroundColor: '#464343', border: 'none' }}
        className={'projects-section text-white'}
      >
        <Card.Img src={require('./one.png')} />
        <Card.Body>
          <Card.Title>Barfi</Card.Title>
          <Card.Text>
            Barfi<br></br>Rs. 900/=
          </Card.Text>
          <Button
            variant='dark'
            style={{ backgroundColor: '#ffffff' }}
            className={'projects-section text-dark'}
          >
            Order Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
