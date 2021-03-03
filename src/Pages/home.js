import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Home1 from '../components/homeComp';




export default class Home extends Component{
    
    render() {
        return (
            <div>
                <Header/>
                <Home1 />
                <Footer/>
            </div>
        );
    }
}

