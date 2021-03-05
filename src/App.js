import './App.scss';
import Home from './Pages/home';
import Resume from './Pages/resume';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import { Provider } from 'react-redux'
import React, { useState, Component } from 'react';
import Store from './redux/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './themes.scss'

function App()  {
  
  const [theme, setTheme] = useState('buttonTrue');
  const change =() => setTheme(theme =>! theme)
  
    return(
            <div className={theme?'buttonTrue' : 'buttonFalse'}>
              <span href='/' className='iconChange'><i className='fa fa-adjust' onClick={change}></i></span>
            <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/resume' component={Resume}/>
              <Route exact path='/projects' component={Projects}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
          </BrowserRouter>
          </div>
  );
}

export default App;