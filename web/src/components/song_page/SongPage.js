import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

import MusicData from '../../assets/data/musics.json'

var title = {
    //fontFamily: " 'Dancing Script', cursive ",
    fontFamily: 'Segoe UI',
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: '5vh',
};

var songList = {
    width: '90vw',
    fontSize: '25px',
    backgroundColor: 'transparent',
    marginLeft:'auto',
    marginRight:'auto',
    borderBottom: "1px solid #dee2e6"

};

var tableHead = {
    borderBottom: '1px solid #ffffff' //HELP IM TRYING TO REMOVE TOP BORDER
};

export class SongPage extends Component {
    render() {
        return (
            <FadeIn>
            <div style = {title}>
                <div>
                    <h1 style={{fontSize: '80px', paddingBottom: '50px'}}>Song List</h1>
                    
                </div>
                <table class="table table-hover table-sm" style={songList}>
  <thead>
    <tr style={{fontSize: '30px', borderBottom: '1px solid #ffffff'}}>
      <th scope="col" style={tableHead}>Song Name</th>
      <th scope="col" style={tableHead}>Genre</th>
      <th scope="col" style={tableHead}>Duration</th>
    </tr>
  </thead>
  <tbody>
    {MusicData.map((songDetail, index)=>{
        return (
            <tr>
                <td>{songDetail.song}</td>   
                <td>{songDetail.type}</td>
                <td>{songDetail.duration}</td>
                </tr>                
        )
    })}
  </tbody>
</table>
            </div>
            

            
            
            </FadeIn>
        )
    }
}

export default SongPage
