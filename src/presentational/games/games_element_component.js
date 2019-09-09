import React from 'react';

const GameElement = props => {
  return (
    <article className="gallery-3d-element" data-angle="">
      <h2 className="element-title">
        {props.game.title}
      </h2>
      <div className="element-text">
        {props.game.short_text}
      </div>
    </article>
  )
}

export default GameElement;