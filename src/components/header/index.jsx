import React, { Component } from 'react';
import './style.scss'
import me from '../../Images/me.png'
import 'font-awesome/css/font-awesome.min.css';
import Modal from '@bdenzer/react-modal';
import { withRouter } from 'react-router-dom';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldShowModal: false,
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
      }
    
      closeModal() {
        this.setState({ shouldShowModal: false });
      }
    
      openModal() {
        this.setState({ shouldShowModal: true });
      } 
    render() {
        return (
                <div>
                  <div className='firstTop'>
                    <h1 className='title'>MARCOS MANZO TORRES</h1>
                    <span href='/' onClick={this.openModal} className='iconBar'><i className='fa fa-bars'></i></span>
                  <div className='divScroll'>
                    <img className='me' style={{margin:'0%'}} src={me} alt=""/>
                </div>
                </div>
                <div className='divScroll1'></div>
                    <Modal
                        closeModal={this.closeModal}
                        shouldShowModal={this.state.shouldShowModal}
                    >
                    <div className='modal'>
                        <p><a href='/'>MARCOS MANZO TORRES</a></p>
                        <p><a href='/resume'>RESUME</a></p>
                        <p><a href='/projects'>PROJECTS</a></p>
                        <p><a href='/contact'>CONTACT</a></p>
                    </div>
                    </Modal>
                </div>
        );
    }
}
export default withRouter((index));