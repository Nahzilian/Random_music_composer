import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import Image from '../../assets/keyboard.jpg'

export class Contact extends Component {
    render() {
        return (
            <FadeIn>
                <div className = "container">
                    <h1 style = {{textAlign:"center"}} >Contact</h1>
                    <br/>
                    <div className = "row block-introduction" >
                        <div className = "col-6">
                            <h3 className = "context-blk">David Phan</h3>
                            <p className = "context-blk">
                            3rd Year Student at Ryerson University<br/>
                            (123) - 456 - 7890
                            </p>
                            <h3 className = "context-blk">Doug Nguyen</h3>
                            <p className = "context-blk">
                            3rd Year Student at Ryerson University<br/>
                            (123) - 456 - 7890
                            </p>
                            <h3 className = "context-blk">Tran Son Tung</h3>
                            <p className = "context-blk">
                            3rd Year Student at idk University<br/>
                            (123) - 456 - 7890
                            </p>
                            <h3 className = "context-blk">Edward Vu</h3>
                            <p className = "context-blk">
                            3rd Year Student at idk University<br/>
                            (123) - 456 - 7890
                            </p>
                        </div>
                        <div className = "col-6">
                            <img src = {Image} width = "100%"/>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}

export default Contact
