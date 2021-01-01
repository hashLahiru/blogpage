import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,CardSubtitle, Button } from 'reactstrap';

class Home extends Component{
    render() {
        return (
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1 ">
                        <Card  border="primary">
                            <CardImg top width="100%" height="300px" src="assets/images/img1.jpg" alt="Home Card" />
                            <CardBody>
                            <CardTitle tag="h5">Read Blog</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Wanna read our blog ? </CardSubtitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                            <Button href="/blog">Click Here!</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardImg top width="100%" height="300px" src="assets/images/img2.jpg" alt="Home Card" />
                            <CardBody>
                            <CardTitle tag="h5">About Us</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Wanna know about us ?</CardSubtitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                            <Button>Click Here!</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardImg top width="100%" height="300px" src="/assets/images/img3.png" alt="Home Card" />
                            <CardBody>
                            <CardTitle tag="h5">Contact US</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Wanna know contact us ?</CardSubtitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                            <Button href="/contact" >Click Here!</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}


export default Home;