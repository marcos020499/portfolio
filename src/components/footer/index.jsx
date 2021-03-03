import React, { Component } from 'react';
import './style.scss'

class index extends Component {
    render() {
        return (
            <div>
                <div className='iconsHeader'>
                        <a href="/" className='iconHeader'><i className='fa fa-facebook-square'></i></a>
                        <a href="/" className='iconHeader'><i className='fa fa-linkedin' style={{height:'18%'}}></i></a>
                        <a href="/" className='iconHeader'><i className='fa fa-instagram'></i></a>
                        <a href="/" className='iconHeader'><i className='fa fa-github'></i></a>
                    </div>
                    <p className='endPage' style={{fontSize: '1.3vw', color:'salmon'}}>© MARCOS MANZO MARCOSTORRES.LIVE@HOTMAIL.COM.</p>
            </div>
        );
    }
}

export default index;