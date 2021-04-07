import { combineReducers } from 'redux';
import MapKeys from '../model/mapKeys';
import lastKey from '../reducers/lastKey';
import lastOperator from '../reducers/lastOperator';
import storedValue from '../reducers/storedValue';
import displayValue from '../reducers/displayValue';
import displayHistory from '../reducers/displayHistory';
import keyDown from '../reducers/keyDown';
import calculated from '../reducers/calculated';
import muted from '../reducers/muted';

const RootReducer = combineReducers({
  lastKey,
  lastOperator,
  storedValue,
  displayValue,
  displayHistory,
  keyDown,
  muted,
  calculated,
  keys: () => MapKeys
});

export default RootReducer;
