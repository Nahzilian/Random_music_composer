import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    //Switch,
    Route
  } from "react-router-dom";


import NavBar from './components/reusable/NavBar'
import Landing from './components/landing_page/Landing'


import { Fragment } from 'react';

function App() {
    return ( 
    <Router>
        <NavBar/>
        <Route exact path = '/'>
            <Landing/>
        </Route>
        
    </Router>
    );
}

export default App;