import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import Image from '../../assets/img1.jpg'


export class AboutUs extends Component {
    render() {
        return (
            <FadeIn>
                <div className = "container">
                    <h1 style = {{textAlign:"center"}} >About us</h1>
                    <br/>
                    <div className = "row block-introduction" >
                        <div className = "col-4">
                            <img src = {Image} width = "100%"/>
                        </div>
                        <div className = "col-8">
                            <h3 className = "context-blk">Lorem ispum</h3>
                            <p className = "context-blk">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis est nunc, ultricies pretium neque et, cursus sollicitudin orci. 
                                Quisque sodales diam vitae tristique molestie.
                            </p>
                            <h3 className = "context-blk">Lorem ispum</h3>
                            <p className = "context-blk">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis est nunc, ultricies pretium neque et, cursus sollicitudin orci. 
                                Quisque sodales diam vitae tristique molestie.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}

export default AboutUs
