import React, { Component } from 'react';

import Search from './Search';
import axios from 'axios';



class Tracks extends Component {
  

    state={ playing: false, audio:null };
    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);


        if(!this.state.playing){
             
            audio.play();
           this.setState({ playing:true, audio});
           axios.post('http://localhost:8000/songs',previewUrl)
           .then(res => {
            console.log(res.data);
            
          });
           
        }
else{
            this.state.audio.pause();
          this.setState({ playing:false });
       }
        
  
    }
  
  render() {
    const { tracks } = this.props;

    return (
      <div>
        {
          tracks.map(track => {
            const { id, name, album, preview_url } = track;

            return (
              <div  className='track' key={id} onClick={this.playAudio(preview_url)}>
                <img 
                  src={album.images[0].url}
                  alt='track-image'
                  className='track-image'
                  
                />
            <p className='track-text'>{name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Tracks;