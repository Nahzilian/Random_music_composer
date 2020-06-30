import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'

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
    //width: '70vw',
    width: '30vw',
    border: '2px solid white',
    textAlign: 'center', //I dont think this does anything :/
    fontSize: '1.75rem',
    backgroundColor: 'transparent',
    color: 'black',
    appearance: 'none',
    paddingLeft: '25px',
    
   // outline: '0',
  //boxShadow: 'none',
 // border: '0',
    backgroundColor: '#f8f9fa',
  //backgroundImage: 'none',
    
};

var subBtn = {
    fontFamily: 'Segoe UI',
    fontWeight: 'bold',
    padding: '8px 45px',
    borderRadius: '25px',
    border: '0px',
    textAlign: 'center', //I dont think this does anything :/
    fontSize: '1.25rem',
    backgroundColor: '#1DB954',
    color: '#191414',
    marginTop: '20px',
    fontStyle: 'italic',
    outline: '0'
};

export class Generate extends Component {
    render() {
        return (
            <FadeIn>
            <div style = {title}>
                <div>
                    <h1>Choose music genre</h1>
                </div>
                {/* <div class="btn-group">
                    <div style = {dropBtn} type="button" class="btn btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                </div>
                    <div class="dropdown-menu" style = {dropMenu}>
                        <a class="dropdown-item" style = {dropItemRounded} href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" style = {dropItemRounded} href="#">Something else here</a>
                    </div>
                </div> */}
                <div>
                <select class="custom-select custom-select-lg mb-3" style={sel}>
                    <option hidden disabled selected value></option>
                    <option>Lofi</option>
                    <option>Hip hop</option>
                    <option>Electronic</option>
                    <option>Classical</option>
                </select>

                </div>
                
                <Link to = "/SongPage">
                <div><button style = {subBtn} >Generate new track</button></div>
                </Link>
                
            </div>

            
            
            </FadeIn>
        )
    }
}

export default Generate
