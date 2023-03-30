import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
    return (
        <div className='container mt-2 shadow-lg border-0'>
            <Card body className='border-0 p-2'>
                <h1 className='mb-2'>Contact Me</h1>
                <div className='container p-2'>
                    <Form className='p-2'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='border-0 border-bottom border-2 border-warning shadow-sm' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control className='border-0 border-bottom border-2 border-warning shadow-sm' type="number" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control className='border-0 border-bottom border-2 border-warning shadow-sm' as="Textarea" rows={7} type="textarea" placeholder="Message" />
                        </Form.Group>

                        <Button variant="warning" type="submit">
                            React Out
                        </Button>
                    </Form>
                </div>
            </Card>
        </div >
    )
}



