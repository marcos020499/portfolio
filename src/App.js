import './App.scss';
import Home from './Pages/home';
import Resume from './Pages/resume';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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