import React, { Component } from 'react'
import Logo from '../../assets/headphone.png'
import FadeIn from 'react-fade-in'

var center = {
    textAlign:"center",
    paddingTop:"80px"
}


export class Introduction extends Component {
    render() {
        return (
            <FadeIn>
                <div className = "container center-block">
                    <div className = "row">
                        <div className = "col-4">
                            <img src = {Logo} width="100%" height = "auto"/>
                        </div>
                        <div className = "col-8" style = {center}>
                            <div className = "introduction">
                                <h2>Random Music Composer</h2>
                                <br/>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis est nunc, ultricies pretium neque et, cursus sollicitudin orci. 
                                    Quisque sodales diam vitae tristique molestie.
                                </p>
                                <button className = "btn-rounded"><i>Generate now!</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}

export default Introduction
