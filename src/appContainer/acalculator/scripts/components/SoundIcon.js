import { Component } from 'react';
import Render from './SoundIconRender';
import PropTypes from 'prop-types';
import Styles from '../../scss/soundIcon.module.scss';

class SoundIcon extends Component {
  onClick() {
    this.props.onClick(!this.props.muted);
  }

  shouldComponentUpdate(prevProps) {
    return prevProps.muted !== this.props.muted;
  }

  getMutedCss(muted) {
    let css = Styles.soundIcon;

    if (muted) {
      css = `${css} ${Styles['soundIcon--muted']}`
    }

    return css;
  }

  render() {
  	return Render.call(this, this.props, this.state);
  }
}

SoundIcon.propTypes = {
  muted: PropTypes.bool,
  onClick: PropTypes.func
};

export default SoundIcon;
