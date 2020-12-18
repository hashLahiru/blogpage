import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Form } from 'react-bootstrap';

class Blog extends Component{
    render() {
        return (
            <div className="container">
                <div>
                    <Card  border="primary">
                        <CardImg top width="100%" height="450px" src="assets/images/img1.jpg" alt="Home Card" />
                        <CardBody>
                        <CardTitle tag="h5">First Blog Post</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"> <img src="assets/images/user.png" name="hasintha" alt="hasintha" width="32px" height="32px"/>   Writtern by: Hasintha Lahiru</CardSubtitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardText>
                        </CardBody>
                        <Form style={{padding: "20px 20px 20px 20px"}}>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label> <b> Post a Comment</b></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Type a comment" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Comment
                            </Button>
                        </Form>
                    </Card>
                    <br />
                </div>
                
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1 ">
                        <Card  border="primary">
                            <CardImg top width="100%" height="300px" src="assets/images/img1.jpg" alt="Home Card" />
                            <CardBody>
                                <CardTitle tag="h5">Random Post #1</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    <img src="assets/images/user.png" name="hasintha" alt="hasintha" width="24px" height="24px"/>   Writtern by: User Random #1
                                </CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                                <Button>Read More!</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardImg top width="100%" height="300px" src="assets/images/img2.jpg" alt="Home Card" />
                            <CardBody>
                                <CardTitle tag="h5">Random Post #2</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    <img src="assets/images/user.png" name="hasintha" alt="hasintha" width="24px" height="24px"/>   Writtern by: User Random #2
                                </CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                                <Button>Read More!</Button>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardImg top width="100%" height="300px" src="/assets/images/img3.png" alt="Home Card" />
                            <CardBody>
                                <CardTitle tag="h5">Random Post #3</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    <img src="assets/images/user.png" name="hasintha" alt="hasintha" width="24px" height="24px"/>   Writtern by: User Random #3
                                </CardSubtitle>
                                <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                                <Button>Read More!</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <br />

                <div>
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Write a blog post</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Here you can write blog posts for CSUP blogpage</CardSubtitle>
                                <Button>Write Post</Button> 
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
