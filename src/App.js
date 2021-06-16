import React from 'react';
import Login from './Components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/auth' component={Login} />
      </Switch>
    </Router>
  );
};

export default App;