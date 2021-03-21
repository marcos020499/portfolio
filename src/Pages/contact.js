import React, { Component } from 'react';
import Contact from '../components/contact';
import Header from '../components/header';
import Footer from '../components/footer';
import EmailLink from '../components/contact/emailLink';


export default class Contact1 extends Component{

    render() {
        return (
            <div>
                <Header/>
                <Contact />
                <EmailLink/>
                <Footer/>
            </div>
        );
    }
}

