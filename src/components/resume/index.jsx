import React, { Component } from 'react';
import './style.scss';


class index extends Component {
    render() {
        return (
            <div className='resume'>
                <h2>RESUME</h2>
                <div className='education'>
                    <h3>EDUCATION</h3>
                    <p>mechatronics engineer</p>
                    <p>Polytechnic University of Guadalajara</p>
                </div>
                <div className='experience'>
                    <h3>EXPERIENCE</h3>
                    <h4>PROGRAMMING INTERNSHIP, COLLADO GROUP</h4>
                    <p>19 / November / 2018 - 13 / January / 2019</p>
                    <h4>PROGRAMMING INTERNSHIP, ASSA ABLOY</h4>
                    <p>17 / November / 2019 - 17 / January / 2020</p>
                </div>
                <div className='skills'>
                    <h3>SKILLS</h3>
                </div>
            </div>
        );
    }
}

export default index;