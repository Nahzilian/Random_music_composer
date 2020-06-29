import React, { Component } from 'react'
import FadeIn from 'react-fade-in'

var title = {
    //fontFamily: " 'Dancing Script', cursive ",
    fontFamily: 'Segoe UI',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '25vh',
};

var dropBtn = {
    borderRadius: '25px',
    width: '70vw',
    border: '2px solid white',
    
    textAlign: 'right',
    fontSize: '1.75rem',
    backgroundColor: 'transparent'
};

var dropMenu = {
    borderRadius: '25px',
    width: '70vw    ',
    textAlign: 'center',
    fontSize: '1.75rem',
    
};

var dropItemRounded = {
    borderRadius: '25px',
};

var sel = {
    borderRadius: '25px',
    width: '70vw',
    border: '2px solid white',
    textAlign: 'center', //I dont think this does anything :/
    fontSize: '1.75rem',
    backgroundColor: 'transparent',
    color: 'black',
    
};

var subBtn = {
    
    padding: '8px 45px',
    borderRadius: '25px',
    border: '2px solid white',
    textAlign: 'center', //I dont think this does anything :/
    fontSize: '1.25rem',
    backgroundColor: 'transparent',
    color: 'white',
    marginTop: '20px',
    fontStyle: 'italic',
};

export class Generate extends Component {
    render() {
        return (
            <FadeIn>
            <div style = {title}>
                <div>
                    <h1>Choose music genre</h1>
                </div>
                <div class="btn-group">
                    <div style = {dropBtn} type="button" class="btn btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </div>
                    <div class="dropdown-menu" style = {dropMenu}>
                        <a class="dropdown-item" style = {dropItemRounded} href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" style = {dropItemRounded} href="#">Something else here</a>
                    </div>
                </div>
                <div>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" style={sel}>
                    <option hidden disabled selected value> </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </select>
                </div>
                <div><button type="submit" style = {subBtn} >Generate new track</button></div>
            
            </div>

            
            
            </FadeIn>
        )
    }
}

export default Generate
