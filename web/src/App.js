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
import Generate from './components/generate_page/Generate'
import SongPage from './components/song_page/SongPage'

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
        <Route exact path = '/Generate'>
            <Generate/>
        </Route>

        <Route exact path = '/Contact'>
            <Contact/>
        </Route>

        <Route exact path = '/SongPage'>
            <SongPage/>
        </Route>
        
        
    </Router>
    );
}

export default App;