import React from 'react'
import Col from 'react-bootstrap/Col';


export default function Progress(props) {
    return (
        <Col>
            <div>
                <h4>{props.title}</h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style={{width:`${props.progress}%`, fontWeight:"bolder", fontStyle:"oblique", textShadow: "2px 2px 8px #FF0000"}} aria-valuenow={props.progress} aria-valuemin="0" aria-valuemax="100">{props.progress}%</div>
                </div>
            </div>
        </Col>
    )
}
