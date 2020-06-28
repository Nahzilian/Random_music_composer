import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    //Switch,
    Route
  } from "react-router-dom";


import NavBar from './components/reusable/NavBar'
import Introduction from './components/landing_page/Introduction'
import AboutUs from './components/landing_page/AboutUs'
import Contact from './components/landing_page/Contact'

import { Fragment } from 'react';

function App() {
    return ( 
    <Router>
        <NavBar/>
        <Route exact path = '/'>
            <Introduction/>
        </Route>

        <Route exact path = '/AboutUs'>
            <AboutUs/>
        </Route>

        <Route exact path = '/Contact'>
            <Contact/>
        </Route>
        
        
    </Router>
    );
}

export default App;