import React, { Component } from 'react';
import './style.scss'
import me from '../../Images/me.png'
import 'font-awesome/css/font-awesome.min.css';
import Modal from '@bdenzer/react-modal';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_DARKTHEME } from '../../redux/actions/sessionActions';

/*import Darkmode from 'darkmode-js';
new Darkmode().showWidget();
const options = {
  position: 'absolute',
  bottom: '90%', // default: '32px'
  right: '-10px', // default: '32px'
  left: '90%', // default: 'unset'
  time: '0.2s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: 'green',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '@', // default: ''
  autoMatchOsTheme: true // default: true
}
 
const darkmode = new Darkmode(options);*/
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
                    <a onClick={this.openModal} className='iconBar'><i className='fa fa-bars'></i></a>
                  <div className='divScroll'>
                    <img className='me' src={me} alt=""/>
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