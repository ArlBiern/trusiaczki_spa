import React, { Component } from 'react';
import { connect } from 'react-redux';
import TalesGallery from './tales_gallery';
import { getTales } from '../../actions/tales-actions';
import HeroElement from '../hero_element';
import { getHeroes } from '../../actions/hero-actions';
import '../home/home.css';
import './tales.css';

class TalesComponent extends Component {
  //constructor(props) {
  //  super(props)
  //}

  componentDidMount() {
    this.props.dispatch(getHeroes('1'));
    this.props.dispatch(getTales());
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="hero">
            <HeroElement hero={this.props.selectedHero} />
          </div>
        </div>
        <div className="container">
          <TalesGallery tales={this.props.tales} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  selectedHero: store.heroesReducer.selectedHero,
  tales: store.talesReducer.tales
});

export default connect(mapStateToProps)(TalesComponent);