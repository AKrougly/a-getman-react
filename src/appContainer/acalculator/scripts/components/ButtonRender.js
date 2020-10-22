import React from 'react';
import '../../scss/button.module.scss';

export default function () {
  return (
    <button
    	ref={(button) => { this.btn = button; }}
    	type={'button'}
    	onTouchStart={this.onMouseDown}
    	onTouchEnd={this.onClick}
    	onMouseDown={this.onMouseDown}
    	onClick={this.onClick}
    	className={this.props.className}>{this.props.label}</button>
  );
}
