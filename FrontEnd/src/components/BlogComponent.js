import React  from 'react';
import {useState} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Form } from 'react-bootstrap';
import Modal from 'react-modal';
import ArticleService from '../Services/ArticleService';
import {useForm} from "react-hook-form";


function Blog(){
    const[modalIsOpen,setModalIsOpen]=useState(false)
    // const [articleDetails, setarticleDetails] = useState({title:'',description:''});

    const{register, handleSubmit}=useForm({
        mode:"onBlur"
    }
    );

    const onSubmit=(data)=>{
        console.log(data);
        setModalIsOpen(false);
        ArticleService.postArticle(data).then(res=>{
            // console.log(res.data);
          this.history.push('/blog');
})

    }
    
        return (
            <div className="container">
                <div>
                    <Card  border="primary">
                        <CardImg top width="100%" height="450px" src="assets/images/img1.jpg" alt="Home Card" />
                        <CardBody>
                        <CardTitle tag="h5">Blog Post</CardTitle>
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
                
                

                <div>
                    <div className="col-12 col-md m-1">
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">Write a blog post</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Here you can write blog posts for CSUP blogpage</CardSubtitle>
                                <div>
                                <button onClick={()=>setModalIsOpen(true)}>Write Post</button>
                                    <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)} 
                                            ariaHideApp={false}
                                            style={
                                                    {
                                             overlay:{
                                                    backgroundColor:'grey'},
                                             content:{
                                                    color:'black',
                                                    fontSize:'140%',}
                                                }}>
        
                                    <h2>Write a Blog Post</h2>
                                    <Form onSubmit={handleSubmit(onSubmit)}>

                                    <Form.Group >
                                    <Form.Group controlId="formGridAddress1">

                                    <Form.Label>Topic</Form.Label>

                                    <Form.Control placeholder="Add topic" as="textarea" name="title"                                   
                                    rows={3} ref={register}/>   
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Label>Content</Form.Label>
                                    
                                    <Form.Control placeholder="Write your Post" as="textarea" name="description"
                                    rows={3} ref={register}/> 
                                    </Form.Group>
                                    </Form.Group>

                                    <Form>
                                    <Form.Group>
                                    <Form.File id="exampleFormControlFile1" label="Upload Image" name="file" ref={register}/>
                                    </Form.Group>
                                    </Form>
                                    <Button variant="primary" type="submit" >
                                    Submit
                                    </Button>
                                    </Form>
                                    <br/>        
                                    <div>
                                    <Button onClick={()=>setModalIsOpen(false)}>close</Button>
                                    </div>
                                    </Modal>
                                </div> 
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }


export default Blog;
