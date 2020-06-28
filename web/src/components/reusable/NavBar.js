import React, { Component } from 'react'
import Logo from '../../assets/headphone.png'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to = "/">
                    <img src={Logo} width="100" height="100" alt="" loading="lazy"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">
                        <Link to = "/" className = "navbar-items">
                            <span>What we do?</span>
                        </Link>
                        <span className="sr-only">(current)</span>
                    </a>
                    <a className="nav-item nav-link" href="#">
                        <Link to = "/" className = "navbar-items">
                            <span>About us</span>
                        </Link>
                    </a>
                    <a className="nav-item nav-link" href="#">
                        <Link to = "/" className = "navbar-items">
                            <span>Contact</span>
                        </Link>
                    </a>
                    <a className="nav-item nav-link" href="#">
                        <Link to = "/" className = "navbar-items">
                            <span>Generate</span>
                        </Link>
                    </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar
