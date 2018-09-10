import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Buttons from '../buttons';

class calculator extends Component {

  render() {
    const result = this.props.counter;
    const tomato = this.props.tomato;

    return(
      <div>
        <p>
          The calculator surface
        </p>
        <h2>{ result }</h2>
        <h3>There are { tomato } tomatoes</h3>
        <Buttons 
          onclickHandler={ (x) => this.props.increment(x) }
          onResetHandler={ () => this.props.resetCounter() }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    tomato: state.tomato
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (x) => dispatch(actions.increment(x)),
    resetCounter: () => dispatch(actions.resetCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(calculator);