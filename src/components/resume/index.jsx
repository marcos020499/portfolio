import React, { Component } from 'react';
import './style.scss';


class index extends Component {
    render() {
        return (
            <div className='resume'>
                <h2>RESUME</h2>
                <div className='education'>
                    <h3>EDUCATION</h3>
                    <p>Mechatronics Engineer</p>
                    <p style={{marginBottom:'3%'}}>Polytechnic University of Guadalajara</p>
                    <strong className='Career'>I decided to study this career because it is a very broad career where you can choose an area to specialize in, from the first day, I chose to be a programmer</strong>
                </div>
                <div className='experience'>
                    <h3>EXPERIENCE</h3>
                    <h4>PROGRAMMING INTERNSHIP, COLLADO GROUP</h4>
                    <p>19 / November / 2018 - 13 / January / 2019</p>
                    <p>equipment programming plc, arduino, and a small product input and output site</p>
                    <h4 style={{marginTop:'4%'}}>PROGRAMMING INTERNSHIP, ASSA ABLOY</h4>
                    <p>17 / November / 2019 - 17 / January / 2020</p>
                    <p>programming of layout of tools, handling of tests with python, support and update of local web with javascript</p>
                </div>
                <div className='skills'>
                    <h3>SKILLS</h3>
                </div>
            </div>
        );
    }
}

export default index;