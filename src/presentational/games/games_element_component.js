import React from 'react';
import { Link } from 'react-router';

const GameElement = props => {
  return(
    <article className="gallery-3d-element" data-angle="">
      <Link to={'gry/' + props.game.id} className='game_link'>
        Zagraj!
      </Link>
      <h2 className="element-title">
        {props.game.title}
      </h2>
      <div className="element-text">
        {props.game.short_text}
      </div>
    </article>
  )
}

export default GameElement