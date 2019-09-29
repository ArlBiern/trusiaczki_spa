import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGame } from '../../actions/games-actions';
import PageNotFound from '../../presentational/pageNotFound_component';

import Memory from './games_folder/memory';
import Game2 from './games_folder/game2';

const gameComponents = {
  memory: Memory,
  game2: Game2
};

class Game extends Component {

  componentDidMount() {
    this.props.dispatch(getGame(this.props.params.name));
  }

  render() {
    if (this.props.gamesNames.includes(this.props.params.name)) {
      const ChosenComponent = gameComponents[this.props.params.name];
      return (
        <ChosenComponent game={this.props.selectedGame}/>
      )
    }
    return (
      <PageNotFound/>
    )
  }
}

const mapStateToProps = store => ({
  selectedGame: store.gamesReducer.selectedGame,
  gamesNames: store.gamesReducer.gamesNames
});

export default connect(mapStateToProps)(Game);
