import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroElement from '../hero_element';
import { getHeroes } from '../../actions/hero-actions';
import '../home/home.css';

class Drawings extends Component {
  componentDidMount() {
    this.props.dispatch(getHeroes('3'));
  }

  render() {
    return (
      <div className="container">
        <div className="hero">
          <HeroElement hero={this.props.selectedHero} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (store) {
    return {
        selectedHero: store.heroesReducer.selectedHero
    };
};

export default connect(mapStateToProps)(Drawings);