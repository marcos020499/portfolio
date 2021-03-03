import React, { Component } from 'react';
import Projects from '../components/projects';
import Header from '../components/header';
import Footer from '../components/footer';


export default class Projects1 extends Component{
    
    render() {
        return (
            <div>
                <Header/>
                <Projects />
                <Footer/>
            </div>
        );
    }
}

