import React, { Component } from 'react';
import './style.scss'

class index extends Component {
    
    render() {
        return (
            <div>
                <form onSubmit=''>
                <div className='contactForm'>
                  <input type="text"placeholder='Full name*' className='formInput' required/>
                  <input type="text"placeholder='Email' className='formInput' required/>
                  <input type="text"placeholder='Message* ' className='formInputMessage' required/>
                  <button type='submit' className='submit'>Submit</button>
                </div>
            </form>
            </div>
        );
    }
}

export default index;