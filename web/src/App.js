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
import Generate from './components/generate_page/Generate'


import { Fragment } from 'react';

function App() {
    return ( 
    <Router>
        <NavBar/>
        <Route exact path = '/'>
            <Landing/>
        </Route>
        <Route exact path = '/generate'>
            <Generate/>
        </Route>
        
    </Router>
    );
}

export default App;