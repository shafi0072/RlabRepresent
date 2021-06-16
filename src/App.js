import React, { createContext, useState } from 'react';
import Login from './Components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export const userContext = createContext()
const App = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    ConfirmPassword: "",
    photoURL: "",
    error: "",
    success: false,
    LoggedInUser: true,
    newUser: false

  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
      <Switch>
        <Route path='/auth' component={Login} />
      </Switch>
    </Router>
    </userContext.Provider>
  );
};

export default App;