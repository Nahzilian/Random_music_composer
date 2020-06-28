import React, { Component } from 'react'

var styling = {
    fontFamily: " 'Dancing Script', cursive ",
    textAlign: 'center',
    paddingTop: '25vh',
};

var stylingDropdown = {
    borderRadius: '25px',
    width: '70vw',
    border: '2px solid white',

    
};

export class Generate extends Component {
    render() {
        return (
            <div style = {styling}>
                <div >
                    <h1>Testing </h1>
                </div>

            
                <div class="btn-group">
                <button style = {stylingDropdown} type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Action
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Separated link</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Generate
