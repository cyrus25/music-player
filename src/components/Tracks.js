import React, { Component } from 'react';

import Search from './Search';
import Songs from './Songs';
import axios from 'axios';



class Tracks extends Component {
  

    state={ playing: false, audio:null };
    playAudio = (previewUrl,track) => () => {

          
      axios.post('http://localhost:8000/songs',track)
      .then(res => {
       console.log(res.data);
       
     });

        const audio = new Audio(previewUrl);


        if(!this.state.playing){
             
            audio.play();
           this.setState({ playing:true, audio});
          
           
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
              <div  className='track' key={id} onClick={this.playAudio(preview_url,track)}>
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