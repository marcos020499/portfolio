import React, { Component } from 'react';
import './style.scss';
import bR from '../../Images/bR.png'
import bR1 from '../../Images/bR1.png'
import googles from '../../Images/googles.png'
import googles1 from '../../Images/googles1.png'

class index extends Component {
    render() {
        return (
            <div className='project'>
                <h3>My projects</h3>
                <div className='project-one'>
                    <img className='project1' src={bR} alt=""/>
                    <img className='project1-1' src={bR1} alt=""/>
                </div>
                <div className='project-two'>
                    <img className='project2' src={googles} alt=""/>
                    <img className='project2-1' src={googles1} alt=""/>
                </div>
                <div className='project-three'>
                    <img className='project3' src={googles} alt=""/>
                </div>
            </div>
        );
    }
}

export default index;