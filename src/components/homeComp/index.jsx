import React, { Component } from 'react';
import './style.scss'
import me1 from '../../Images/me13.png'
import 'font-awesome/css/font-awesome.min.css';
import { withRouter } from 'react-router-dom';

class index extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div> 
                <div>
                    <div className='firstSection'>
                        <div className='iconsHeader'>
                            <a href="https://www.facebook.com/marcos.manzo.39" target='_blank' className='iconHeader'><i className='fa fa-facebook-square'></i></a>
                            <a href="https://www.linkedin.com/in/marcos-manzo-568719159/" target='_blank' className='iconHeader'><i className='fa fa-linkedin' style={{height:'18%'}}></i></a>
                            <a href="https://www.instagram.com/manzo_marcos/" target='_blank' className='iconHeader'><i className='fa fa-instagram'></i></a>
                            <a href="https://github.com/marcos020499?tab=repositories" target='_blank' className='iconHeader'><i className='fa fa-github'></i></a>
                        </div>
                        <h2 className='description'>A PASSIONATE WEB SOFTWARE DEVELOPER</h2>
                        <p className='description'>Welcome to my website, I'm Javascript developer, with experience in developing web. Please feel free to read more about me, or you can check out my resume or contact me.</p>
                    </div>
                    <div className='personalInfo'>
                        <img src={me1} className='imgPrincipal' alt=""/>
                        <h2 className='nameInfo'>MARCOS MANZO TORRES</h2>
                        <a href="mailto:marcostorres.live@hotmail.com" className='emailInfo'>marcostorres.live@hotmail.com</a>
                    </div>
                    <div className='info'>
                        <h3 style={{padding: '0%'}}>Who i am?</h3>
                        <p>I am a mechatronics engineer, i live in guadalajara and from a very age, i have adopted programming as a lifestyle, something every day, a place where you never finish learning.</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(index);
