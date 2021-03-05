import React, { Component } from 'react';
import './style.scss'

class index extends Component {
    render() {
        return (
            <div>
                <div className='iconsFooter'>
                    <a href="https://www.facebook.com/marcos.manzo.39" target='_blank' className='iconHeader'><i className='fa fa-facebook-square'></i></a>
                    <a href="https://www.linkedin.com/in/marcos-manzo-568719159/" target='_blank' className='iconHeader'><i className='fa fa-linkedin' style={{height:'18%'}}></i></a>
                    <a href="https://www.instagram.com/manzo_marcos/" target='_blank' className='iconHeader'><i className='fa fa-instagram'></i></a>
                    <a href="https://github.com/marcos020499?tab=repositories" target='_blank' className='iconHeader'><i className='fa fa-github'></i></a>
                </div>
                <div className='footer'>
                    <p className='endPage' style={{color:'salmon', textAlign: 'center'}}>© MARCOS MANZO <a  href="mailto:marcostorres.live@hotmail.com" style={{color:'salmon'}}> MARCOSTORRES.LIVE@HOTMAIL.COM.</a></p>
                </div>
            </div>
        );
    }
}

export default index;