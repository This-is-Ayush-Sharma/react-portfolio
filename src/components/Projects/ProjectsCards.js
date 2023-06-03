import React from 'react'
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function ProjectsCards(props) {
    return (
        <Col>
            <Card className='shadow-lg border-0 border-bottom border-3 border-warning'>
                {/* <Card.Img height={250} variant="top" src={props.image} /> */}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <div><span style={{ fontWeight: "bold" }}>Ripo Link:-</span><span><a href={props.clone_url}>Head Over</a></span></div>
                        <div> <span>Language Used:- </span><span>{props.language ? props.language: 'None'}</span> </div>
                        <div>
                            <span>Branch:- </span>
                            <span>
                                {props.default_branch}
                            </span>
                        </div>
                        <div>
                            <span>Created at:- </span><span>{new Date(props.created_at).toDateString()}</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
