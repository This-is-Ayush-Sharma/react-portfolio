import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-3 border-0 w-100 position-relative text-center" style={{margin: "12px 0"}}>
      <Container>
        <Row>
          <Col>
            <p className="text-muted mb-0">&copy; {(new Date()).getFullYear()} Designed By Ayush Sharma</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
