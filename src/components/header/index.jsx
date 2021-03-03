import React, { Component } from 'react';
import './style.scss'
import me from '../../Images/me.png'
import 'font-awesome/css/font-awesome.min.css';
import Modal from '@bdenzer/react-modal';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button: false,  
            shouldShowModal: false,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    
      closeModal() {
        this.setState({ shouldShowModal: false });
      }
    
      openModal() {
        this.setState({ shouldShowModal: true });
      }
      handleClick(){
        this.setState({
          button:!this.state.button
        })
      }
    render() {
        return (
                <html className={this.state.button ? "buttonTrue" : "buttonFalse"} >
                  <div className='firstTop'>
                    <h1 className='title'>MARCOS MANZO TORRES</h1>
                    <span href='/' className='iconChange'><i className='fa fa-adjust' onClick={this.handleClick}></i></span>
                    <a onClick={this.openModal} className='iconBar'><i className='fa fa-bars'></i></a>
                  </div>
                  <div className='divScroll'>
                    <img src={me} alt=""/>
                </div>
                <div className='divScroll1'></div>
                    <Modal
                        closeModal={this.closeModal}
                        shouldShowModal={this.state.shouldShowModal}
                    >
                    <div className='titleLogin'>
                        <p><a href='/'>MARCOS MANZO TORRES</a></p>
                        <p><a href='/resume'>RESUME</a></p>
                        <p><a href='/projects'>PROJECTS</a></p>
                        <p><a href='/contact'>CONTACT</a></p>
                    </div>
                    </Modal>
                </html>
        );
    }
}

export default index;