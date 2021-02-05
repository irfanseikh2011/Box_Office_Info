import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {

  return (
    <div>
    <Navs/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route> 
      <Route path="/starred">
        <Starred/>
      </Route>
      <Route>
        <h1>404 Error! Page not Found.</h1>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
