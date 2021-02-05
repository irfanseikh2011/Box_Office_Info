import React from 'react';
import {Switch, Route} from 'react-router-dom';

function App() {

  return (
      <Switch>
      <Route exact path="/home">
        <h1>Welcome to the Homepage</h1>
      </Route> 
      <Route path="/profile">
        <h1>You have reached your Profile Page</h1>
      </Route>
      <Route>
        <h1>404 Error! Page not Found.</h1>
      </Route>
    </Switch>
  );
}

export default App;
