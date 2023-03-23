import React from 'react'
import ayush from '../asserts/images/ayush.jpg'
export default function Lander() {
    return (
        <div class="fluid-container">
            <div className="card b-1" style={{ maxWidth: "100%", maxHeight: "100%"}}>
                <div className="row g-0">
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={ayush} className="img-fluid rounded-start" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
