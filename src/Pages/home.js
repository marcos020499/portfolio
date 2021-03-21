import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Home1 from '../components/homeComp';
import EmailLink1 from '../components/homeComp/emailLink';




export default class Home extends Component{
    
    render() {
        return (
            <div>
                <Header/>
                <EmailLink1/>
                <Home1 />
                <Footer/>
            </div>
        );
    }
}

