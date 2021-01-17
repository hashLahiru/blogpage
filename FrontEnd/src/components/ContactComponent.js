import React, {Component} from 'react';
//import { Button } from 'mdb-ui-kit';

class Contact extends Component{
    render() {
        return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h3>Location Information</h3>
                </div>
                
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        Department of Statistics and Computer Science<br />
                        Faculty of Science<br />
                        University of Peradeniya<br />
                        <i className="fa fa-phone"></i>: +94 81 123 4568<br />
                        <i className="fa fa-fax"></i>: +94 81 123 4568<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:csup@sci.pdn.ac.lk">csup@sci.pdn.ac.lk</a>
                        </address>
                </div>
                
                <div className="col-12 col-sm-6 offset-sm-1 ">
                    <h5>Social Media Links</h5>
                    <div className="col">
                    </div>
                </div>
                
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        
                    </div>
                </div>
            </div>
            
            <br />
        </div>
        );
    }
}

export default Contact;