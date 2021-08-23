import { connect } from 'react-redux';
import View from '../views/View.js';
import createAction from '../actions/createAction';
import * as constants from '../actions/constants';

function mapStateToProps(store) {
  return store;
}

function _isActiveCSS(css, key, keyDown, Styles) {
  let active = '';
  let className = '';

  if (key === keyDown) {
    active = Styles.active;
  }

  className = `${css} ${active}`;

  return className;
}

function _getButtonClass(elmt, Styles) {
  let css = '';

  if (elmt.type === 'operator') {
    css = Styles.button_primaryOperator;
  }

  if (elmt.type === 'result') {
    css = Styles.button_runOperator;
  }

  return `${Styles.button} ${css}`;
}

function _keyUpAction(key, props) {
  const { lastKey, lastOperator, storedValue, displayValue, displayHistory, calculated } = props;

  props.keys.map((elmt) => {
    if (key === elmt.key) {
      props[elmt.command](key, { lastKey, lastOperator, storedValue, displayValue, displayHistory, calculated });
    }
    return null;
  });

  return false;
}

function _dispatchAction(dispatch, action, value) {
  dispatch(createAction(action, value));
}

function _commonActions({ constants, dispatch, value, data }) {
  const [first, second] = constants;
//console.log(`value ${value}`);
  _dispatchAction(dispatch, first, { value, data });
  _dispatchAction(dispatch, second, { value: false });
}

function _operatorAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.OPERATOR, { value, data });
  _dispatchAction(dispatch, constants.CALC, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: true });
}

function _resultAction(dispatch, value, data) {
  _dispatchAction(dispatch, constants.OPERATOR, { value, data });
  _dispatchAction(dispatch, constants.CALC, { value, data });
  _dispatchAction(dispatch, constants.CALCULATED, { value: true });
  _dispatchAction(dispatch, constants.HISTORY_CLEAR, { value, data });
}

const mapDispatchToProps = (dispatch) => {
  return {
    muteAction: (value) => { _dispatchAction(dispatch, constants.MUTED, { value }); },
    keyDownAction: (value) => { _dispatchAction(dispatch, constants.KEY_DOWN, { value }); },
    keyUpAction: (key, props) => { _keyUpAction(key, props); },
    numAction: (value, data) => { _commonActions({ constants: [constants.NUM, constants.CALCULATED], dispatch, value, data }); },
    commaAction: (value, data) => { _commonActions({ constants: [constants.COMMA, constants.CALCULATED], dispatch, value, data }); },
    //numAction: (value, data) => { _dispatchAction(dispatch, constants.NUM, { value, data }); },
    //commaAction: (value, data) => { _dispatchAction(dispatch, constants.COMMA, { value, data }); },
    switchOperatorAction: (value, data) => { _commonActions({ constants: [constants.SWITCH_OPERATOR, constants.CALCULATED], dispatch, value, data }); },
    percentAction: (value, data) => { _commonActions({ constants: [constants.PERCENT, constants.CALCULATED], dispatch, value, data }) },
    operatorAction: (value, data) => { _operatorAction(dispatch, value, data); },
    resultAction: (value, data) => { _resultAction(dispatch, '='/*value*/, data); },
    clearAction: (value, data) => { _dispatchAction(dispatch, constants.CLEAR, { value, data }); },
//    deleteAction: (value, data) => { _dispatchAction(dispatch, constants.DEL, { value, data }); },
    deleteAction: (value, data) => { _commonActions({ constants: [constants.DEL, constants.CALCULATED], dispatch, value, data }); },
    isActiveCSS: (css, key, keyDown, Styles) => { return _isActiveCSS(css, key, keyDown, Styles); },
    getButtonClass: (elmt, Styles) => { return _getButtonClass(elmt, Styles); }
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(View);

export default Container;
