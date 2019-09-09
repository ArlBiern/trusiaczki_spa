import React, { Component } from 'react';
import { connect } from 'react-redux';
import TalesGallery from './tales_gallery';
import { getTales } from '../../actions/tales-actions';

class TalesComponent extends Component {
  //constructor(props) {
  //  super(props)
  //}

  componentDidMount() {
    this.props.dispatch(getTales());
  }

  render() {
    return (
      <TalesGallery tales={this.props.tales} />
    )
  }
}

const mapStateToProps = store => ({
  tales: store.talesReducer.tales
});

export default connect(mapStateToProps)(TalesComponent);
