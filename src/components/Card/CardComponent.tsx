import React from 'react'
import { Card, Row } from 'react-bootstrap'

const CardComponent = () => {
    const list = [
        { image: 'http://www.fiumsa.edu.bo/academia1.jpg', title: 'GRADO' },
        { image: 'http://www.fiumsa.edu.bo/meson_pi1.jpg', title: 'POSTGRADO' },
        { image: 'http://www.fiumsa.edu.bo/chacaltaya1.jpg', title: 'INVESTIGACIÓN' },
        { image: 'http://www.fiumsa.edu.bo/patacamaya.jpg', title: 'INTERACCIÓN SOCIAL' },
        { image: 'http://www.fiumsa.edu.bo/logo_planet.png', title: 'PLANETARIO MAX SHCREIER' },
        { image: 'http://www.fiumsa.edu.bo/agujero_negro.jpg', title: 'CURSOS' },
        { image: 'http://www.fiumsa.edu.bo/logo-olimpiada1.jpg', title: 'OLIMPIADAS' },
    ]
    const CardList = list.map(e =>
        <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={e.image} style={{ width: '8rem', height: '8rem' }} />
            <Card.Body>
                <Card.Title>{e.title}</Card.Title>
            </Card.Body>
        </Card>
    )
    return (
        <Row className="justify-content-md-center">
            {CardList}
        </Row>
    )
}

export default CardComponent