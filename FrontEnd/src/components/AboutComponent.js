import React, {Component} from 'react';
import {Card, CardBody, CardText, CardTitle} from 'reactstrap';

class About extends Component{
    render() {
        return (
            <div className="container">
                <div className="col-12 col-md m-1 ">
                    <Card  border="primary">
                        <CardBody>
                            <CardTitle tag="h5">Who we are</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Our Vision</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md m-1">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Our Mission</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardText>
                        </CardBody>
                    </Card>
                </div>
            <br />
        </div>
        );
    }
}

export default About;