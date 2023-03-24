
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import AchievementCard from './AchievementCards'

function Achievement() {
    return (
        <div class="container">
            <Row xs={1} md={2} className="g-4">
                {
                    Array.from({ length: 4 }).map((_, idx) => (
                        <AchievementCard />
                    ))}
            </Row>
        </div>
    );
}

export default Achievement;