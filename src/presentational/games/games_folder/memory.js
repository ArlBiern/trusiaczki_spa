import React, { Component } from 'react';

class Memory extends Component {

  render () {
    return (
      <div>
        <p>{this.props.game.title}</p>
        <p>{this.props.game.short_text}</p>
      </div>
    )
  }

}

export default Memory
