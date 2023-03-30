import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


export default function AchievementCards(props) {
    return (
        <Col>
        {console.log(props.title)}
            <Card className='shadow border-0 border-bottom border-3 border-warning'>
                <Card.Img height={250} variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.data}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
