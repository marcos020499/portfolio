import React, { Component } from 'react';
import './style.scss';
import bR from '../../Images/bR.png'
import bR1 from '../../Images/bR1.png'
import googles from '../../Images/googles.png'
import googles1 from '../../Images/googles1.png'
import ecommerce from '../../Images/e-commerce.png'
import ecommerce1 from '../../Images/e-commerce1.png'

class index extends Component {
    render() {
        return (
            <div className='project'>
                <h2>My projects</h2>
                <div className='project-one'>
                    <p>In this project, I worked a small real estate website focused on the sale of houses, basically we have different properties each with different characteristics and what we do is enter the specifications of each of the properties. it was made with html, css, nodejs and javascript</p>
                    <img className='project1' src={bR} alt=""/>
                    <img className='project1-1' src={bR1} alt=""/>
                </div>
                <div className='project-two'>
                    <p>This project was a mirror of a website focused on the sale of glasses, where we have a shopping cart, we can register and log in respectively. it was made with react, css, nodejs, express and mongodb</p>
                    <img className='project2' src={googles} alt=""/>
                    <img className='project2-1' src={googles1} alt=""/>
                </div>
                <div className='project-three'>
                    <p>This project is a MERN application, have database for de user's and the products, you could add, edit, filter, find and remove with the database. the aplication have a cartItems with redux.</p>
                    <img className='project3' src={ecommerce} alt=""/>
                    <img className='project3-1' src={ecommerce1} alt=""/>
                </div>
            </div>
        );
    }
}

export default index;