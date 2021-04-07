import React from 'react';

import Button from '../components/Button.js';
import SoundIcon from '../components/SoundIcon';
import Display from '../components/display';
import Styles from '../../scss/calculator.module.scss';
import StylesButton from '../../scss/button.module.scss';

export default function () {
  return (
    <div className={Styles.calculator}>
      <SoundIcon onClick={this.props.muteIconClick} muted={this.props.muted} />
      <div className={Styles.calculator__header}>
        <Display className={Styles.calculator__history} value={this.props.displayHistory}/>
        <Display className={Styles.calculator__result} value={this.props.displayValue}/>
      </div>
      <div className={Styles.calculator__body}> {
        this.props.keys.map((elmt, index) => {
          var css = this.props.getButtonClass(elmt, StylesButton);
          return (
            <Button key={index} ref={elmt.key} label={elmt.label} id={elmt.key}
              onMouseDown={this.props.onMouseDown} onClick={this.props.buttonClick}
              className={this.props.isActiveCSS(css, elmt.key, this.props.keyDown, StylesButton)} />
          );
	      })
	    }
      </div>
    </div>
  );
}
