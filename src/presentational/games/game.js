import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGame } from '../../actions/games-actions';

import { Memory, Game2 } from './games_folder/test';

const gameComponents = {
    memory: Memory,
    game2: Game2
};


//Patrz link:::
//<Route exact path="/user/1" component={UserPage1} />
//<Route exact path="/user/2" component={UserPage2} />
//https://learnwithparam.com/blog/dynamic-pages-in-react-router/

//Chyba poniższe najlepsze:
//https://stackoverflow.com/questions/29875869/react-jsx-dynamic-component-name

class Game extends Component {
  //constructor(props) {
  //  super(props)
  //}

  componentDidMount() {
    this.props.dispatch(getGame(this.props.params.id));
  }

  render() {
    console.log(this.props.selectedGame.type);
    console.log(gameComponents["memory"]);


    const ChosenComponent = gameComponents["memory"];
    return (
      <ChosenComponent game={this.props.selectedGame}/>
    )
  }
}
/*
return (
  <div>
    //{this.props.selectedGame.title}
  </div>
)
*/

const mapStateToProps = store => ({
  selectedGame: store.gamesReducer.selectedGame
});


export default connect(mapStateToProps)(Game);