import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function AchievementCards() {
    return (
        <Col>
            <Card>
                <Card.Img height={250} variant="top" src="https://static.toiimg.com/thumb/msid-98968012,imgsize-21874,width-800,height-600,resizemode-75/98968012.jpg" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
