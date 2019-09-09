import React from 'react';

const TalesGallery = (props) => (
  <div>
    {props.tales.map(tale => {
      return (
        <div key={tale.id}>
          <h1>{tale.title}</h1>
          <h3>{tale.short_text}</h3>
        </div>
      )
    })}
  </div>
)

export default TalesGallery;
