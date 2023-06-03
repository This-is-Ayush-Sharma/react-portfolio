
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AchievementCard from './AchievementCards';


import avyaktbackend from '../asserts/images/Achievement/avyakt.jpeg';
import hack4gietu from '../asserts/images/Achievement/hack4gietu.png';
import busTracking from '../asserts/images/Achievement/busTracking.png';
import vapt from '../asserts/images/Achievement/VAPT.jpeg';
import pythonnptel from '../asserts/images/Achievement/pythonnptel.jpeg';
import CSpoken from '../asserts/images/Achievement/CSpoken.jpeg';
import PhpSpoken from '../asserts/images/Achievement/PhpSpoken.jpeg';
import Workshop from '../asserts/images/Achievement/WorkShop.jpeg';
function Achievement() {

    const cardData = [
        {
            image: avyaktbackend,
            title: "Developed College fest backend",
            data: "Developed backend and managed over 1500 student data with authentication and followed MVC pattern."
        },
        {
            image: hack4gietu,
            title: "Part of the team conducted Hack-4-GIETU",
            data: "Conducted the biggest hackthon in the history of University with more than 60 team under Google Developers Student Club."
        },
        {
            image: busTracking,
            title: "Part of the team which developed bus tracking system for the university",
            data: "My role was to develop a scalable backend for the tracking device.\nfollowed MVC code pattern, NODE JS, EXPRESS JS, SOCKET.IO, REST API, GOOGLE MAPS"
        },
        {
            image: vapt,
            title: "Found Major vulnerability in university ERP system",
            data: "Performed Vulnerability Assessment and Penetration Testing on university ERP-system on which the entire university depends.\nI have developed the scripts using Python"
        },
        {
            image: pythonnptel,
            title: "Joy of Computing Using Python",
            data: "Scored 91% markes in Nptel which has been organized by IIT Madras.\nAnd i had been ranked in top 2% of this cource"
        },
        {
            image: Workshop,
            title: "Trained 100+ students of my University",
            data: "I has been the mentor for the Workshop of fullstack web development.\nTopic Covered (HTML, BOOTSTRAP, JS, NODE JS, EXPRESS JS)"
        },
        {
            image: CSpoken,
            title: "Spoken Tutorial C Language",
            data: "I have Scored 95% of marks in Spoken tutorial has been organized by IIT Bombay."
        },
        {
            image: PhpSpoken,
            title: "Spoken Tutoial PHP, MYSQL",
            data: "I have Scored 75% of marks in Spoken tutorial has been organized by IIT Bombay."
        }
    ]
    return (
        <div className="container mt-3 p-4">
            <Row xs={1} md={2} className="g-4">
                {
                    cardData.map((element, idx) => (
                        <AchievementCard {...element}/>
                    ))
                }
            </Row>
        </div>
    );
}

export default Achievement;