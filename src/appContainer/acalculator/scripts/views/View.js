import React from 'react';
import PropTypes from 'prop-types';
import Render from './ViewRender';
import Sound from '../model/sound';
import Styles from '../../scss/home.module.scss';

class View extends React.Component {
  componentDidMount() {
    //this.onClick = this.onButtonClick.bind(this);
    //this.onMouseDown = this.onMouseDown.bind(this);

    document.body.onkeydown = this.onKeyDown.bind(this);
    document.body.onkeyup = this.onKeyUp.bind(this);

    document.addEventListener('touchstart', (evt) => { evt.preventDefault() }, { passive: true });

    this.sound = new Sound();
    this.sound.setup();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementsByClassName(`${Styles.home}`)[0].classList.add(`${Styles.fadeIn}`);
      });
    });
  }

  onKeyDown(evt) {
    let button = this.calculator.refs[evt.key];

    if (button && !button.isActive()) {
      this.props.keyDownAction(evt.key);
    }
  }

  onKeyUp(evt) {
    let button = this.calculator.refs[evt.key];

    if (button) {
      this.sound.mute(this.props.muted);
      this.sound.play();
    }

    this.props.keyDownAction('');
    this.props.keyUpAction(evt.key, this.props);
  }

  onButtonClick(key) {
    this.sound.mute(this.props.muted);
    this.sound.play();
    this.props.keyDownAction('');
    this.props.keyUpAction(key, this.props);
  }

  onMouseDown(key) {
    this.props.keyDownAction(key);
  }

  onMuteIconClick(value) {
    this.props.muteAction(value);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}

View.propTypes = {
  muteAction: PropTypes.func
  , muted: PropTypes.bool
  , keyDownAction: PropTypes.func
  , keyDown: PropTypes.string
  , keyUpAction: PropTypes.func
};

export default View;
