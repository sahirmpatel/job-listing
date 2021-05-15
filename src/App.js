import {React,useContext} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/NavBar';
import ThemeContext from "./context/ThemeContext";
import JobListings from './pages/JobListings'
import Landing from './pages/Landing'
import Login from './pages/Login'
import styled from 'styled-components'

const MainAppDiv = styled.div`
background-color: ${(props) => (props.darkmode ? "#13131A" : "#FAFAFB")};
color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
padding: 0px calc((100vw * 0.6) / 12) 0px calc((100vw * 0.6) / 12);
transition: background-color 0.3s ease-out;
`

const App = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <Router>
      
    <MainAppDiv darkmode={dark} > 
    
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
      
    </MainAppDiv>
    </Router>
  )
}



export default App
