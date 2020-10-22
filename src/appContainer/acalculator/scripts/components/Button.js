import React from 'react';
import PropTypes from 'prop-types';
import Render from './ButtonRender';
import '../../scss/button.module.scss';

class Button extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
  }

  shouldComponentUpdate(prevProps) {
    return prevProps.className !== this.props.className;
  }

  isActive() {
    const regex = new RegExp(/active/, 'gi');

    return this.props.className.match(regex) !== null;
  }

  onClick(evt) {
    evt.preventDefault();
    evt.currentTarget.blur();

    this.props.onClick(this.props.id);
  }

  onMouseDown(evt) {
    evt.preventDefault();

    this.props.onMouseDown(this.props.id);
  }

  render() {
    return Render.call(this, this.props, this.state);
  }
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  className: PropTypes.string
};

export default Button;
