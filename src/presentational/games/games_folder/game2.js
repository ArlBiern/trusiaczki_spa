import React from 'react';

const Game2 = props => {
  return(
    <div>
      <p>{props.game.title}</p>
      <p>{props.game.short_text}</p>
    </div>
  )
}

export default Game2