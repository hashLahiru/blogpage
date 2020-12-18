import React, { Component } from 'react';
import { Carousel, Col, Image } from 'react-bootstrap';

class CarouselTop extends Component{
    render() {
        return (
            <Carousel>
            <Carousel.Item interval={1000} align="center">
                <Col>
                    <Image src="assets/images/img1.jpg" width="640px" height="360px" rounded />
                </Col>
              
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000} align="center" >
                <Col>
                    <Image src="assets/images/img2.jpg" width="640px" height="360px" rounded />
                </Col>

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item align="center">
                <Col>
                    <Image src="assets/images/img3.png" width="640px" height="360px" rounded />
                </Col>

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <br />
          </Carousel>
          
        );
    }
}

export default CarouselTop;