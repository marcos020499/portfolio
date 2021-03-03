import React, { Component } from 'react';
import Resume from '../components/resume';
import Header from '../components/header';
import Footer from '../components/footer';
import Skills from '../components/skills';
import { skills, categories } from '../data/skills';


class Resume1 extends Component{
    render() {
        return (
            <div>
                <Header/>
                <Resume />
                <Skills skills={skills} categories={categories} />
                <Footer/>
            </div>
        );
    }
}
export default Resume1;
