import React, { Component } from 'react';
import './style.scss';
import javascript from '../../Images/javascript.svg';
import mongodb from '../../Images/mongodb.svg';
import express from '../../Images/express.svg';
import react from '../../Images/react.svg';
import node from '../../Images/node.svg';
import bienesRaices from '../../Images/bienesRaices.png'
import Googles from '../../Images/bienesRaices.png'
import bienesRaices1 from '../../Images/bienesRaices1.png'
import Googles1 from '../../Images/googles.png'

class index extends Component {
    render() {
        return (
            <div className=''>
                <h2>RESUME</h2>
                <div>
                    <h3>EDUCATION</h3>
                    <p>mechatronics engineer</p>
                    <p>Polytechnic University of Guadalajara</p>
                </div>
                <div>
                    <h3>EXPERIENCE</h3>
                    <h4>PROGRAMMING INTERNSHIP, COLLADO GROUP</h4>
                    <p>19 / November / 2018 - 13 / January / 2019</p>
                    <h4>PROGRAMMING INTERNSHIP, ASSA ABLOY</h4>
                    <p>17 / November / 2019 - 17 / January / 2020</p>
                </div>
                <div>
                    <h3>SKILLS</h3>
                </div>
                <div>
                    <h3>COURSES</h3>
                </div>
                <div className='iconLenguajes'>
                    <img className='iconsLenguajes' src={javascript} alt=""/>
                    <img className='iconsLenguajes' src={mongodb} alt=""/>
                    <img className='iconsLenguajes' src={express} alt=""/>
                    <img className='iconsLenguajes' src={react} alt=""/>
                    <img className='iconsLenguajes' src={node} alt=""/>
                </div>
            </div>
        );
    }
}

export default index;