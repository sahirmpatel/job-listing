import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';

import JobListings from './pages/JobListings'
import Landing from './pages/Landing'
import Login from './pages/Login'
const App = () => {
  return (
    <Router>
      
    <div>
    
        <NavBar/>
       {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/joblistings">
          <JobListings/>
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      
    </div>
    </Router>
  )
}



export default App
