import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';

class PostCard extends Component{
    render() {
        return (
            <Card border="dark" style={{ width: '80rem' }} align="center">
                <Card.Body>
                    <Card.Title>Dark Card Title</Card.Title>
                    
                    <Col sd={11} md={5}>
                    <Card.Img variant="top" width="740px" height="360px" src="assets/images/img1.jpg" />
                    </Col>
                    
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default PostCard;