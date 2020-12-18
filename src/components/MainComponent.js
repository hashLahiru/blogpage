import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Blog from './BlogComponent'
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';


class Main extends Component {


    render(){
        const HomePage = () => {
            return(
                <Home />
            );
        }

        const BlogPage = () => {
            return(
                <Blog />
            );
        }

        const ContactPage = () => {
            return(
                <Contact />
            );
        }

        const AboutPage = () => {
            return(
                <About />
            );
        }



        return (
            <div>
                <Header /> 
                    <Switch> 
                            <Route path='/home' component={HomePage} />
                            <Route path='/blog' component={BlogPage} />
                            <Route path='/about' component={AboutPage} />
                            <Route path='/contact' component={ContactPage} />
                            <Redirect to="/home" /> 
                    </Switch>             
                <Footer />
            </div>
        );
    }
}

export default withRouter(Main);