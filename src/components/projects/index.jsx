import React, { Component } from 'react';
import './style.scss';
import bienesRaices from '../../Images/bienesRaices.png'
import Googles from '../../Images/bienesRaices.png'
import bienesRaices1 from '../../Images/bienesRaices1.png'
import Googles1 from '../../Images/googles.png'

class index extends Component {
    render() {
        return (
            <div className='project'>
                <h3>My projects</h3>
                <div className='project-one'>
                    <img className='project1' src={bienesRaices} alt=""/>
                    <img className='project1-1' src={bienesRaices1} alt=""/>
                <div className='project-two'>
                    <img className='project2' src={Googles} alt=""/>
                    <img className='project2-1' src={Googles1} alt=""/>
                </div>
                <div className='project-three'>
                    <img className='project3' src={Googles} alt=""/>
                    <img className='project3-1' src={Googles1} alt=""/>
                </div>
                </div>
            </div>
        );
    }
}

export default index;