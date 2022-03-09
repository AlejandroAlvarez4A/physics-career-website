import React from 'react'
import { Card } from 'react-bootstrap'

const CardComponent = () => {
    return (
        
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="http://www.fiumsa.edu.bo/academia1.jpg" />
  <Card.Body>
    <Card.Title>Grado</Card.Title>
  </Card.Body>
</Card>
    )
}

export default CardComponent