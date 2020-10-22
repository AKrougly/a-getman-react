import React from 'react';
import PropTypes from 'prop-types';
import Render from './CalculatorRender';

class Calculator extends React.Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}

Calculator.propTypes = {
  lastKey: PropTypes.string
  , result: PropTypes.string
  , displayValue: PropTypes.string
  , displayHistory: PropTypes.string
  , keyDown: PropTypes.string
  , muted: PropTypes.bool
  , keys: PropTypes.array
  , muteIconClick: PropTypes.func
  , buttonClick: PropTypes.func
  , onMouseDown: PropTypes.func
  , getButtonClass: PropTypes.func
  , isActiveCSS: PropTypes.func
};

export default Calculator;
