import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Input, NavbarToggler  } from 'reactstrap';
import { Button, Form, Nav, Navbar, Jumbotron, Container } from 'react-bootstrap';
//import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert(" Username:" + this.username.value + " Password: " + this.password.value +
        " Remember: " +this.remember.checked );
        event.preventDefault();
    }
    
    render(){
        return(
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <NavbarToggler onClick={this.toggleNav} />
                    <Navbar.Brand href="#home">CSUP</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button onClick={this.toggleModal} variant="outline-info">Log-In</Button>
                    </Form>
                </Navbar>
                <Jumbotron fluid >
                    <Container bg="dark" variant="dark" >
                        <h1>CSUP Blog Space</h1>
                        <p>This is the Blog space for the Computer Society - University of Peradeniya. "CSUP" is the governing body for the students who are following Computer Science as a major subject throughout their undergraduate studies at the University.</p>
                    </Container>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>LogIn</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">UserName</Label>
                                <Input type="text" id="username" name="username" 
                                innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" 
                                innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                    innerRef={(input) => this.remember = input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">LogIn</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </React.Fragment>
        );
    }
}

export default Header;