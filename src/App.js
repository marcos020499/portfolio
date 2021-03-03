import './App.css';
import Home from './Pages/home';
import Resume from './Pages/resume';
import Projects from './Pages/projects';
import Contact from './Pages/contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';





function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/resume' component={Resume}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;