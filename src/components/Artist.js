import React from 'react';

const Artist = props =>{
    if(!props.artist)
    return null;
    const{images,name,followers,genres}=props.artist;


return(
    <div align>
      
        <h3>{name}</h3>
        <p>{followers.total} followers </p>
        <p>{genres.join(',')}</p>
        <img src={images[0]&&images[0].url}
        style={{
             width:200,
             height:200,
             borderRadius:100,
             objectFit:'cover'
        }}
         alt='artist-profile' />
    </div>
)
}

export default Artist;