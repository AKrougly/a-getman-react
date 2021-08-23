import { connect } from 'react-redux';
import * as actions from '../stores/actions';

import { loadState } from '../stores/api/apiLocalStorage';

import {
  importItems,
  exportItems,
} from '../stores/api/apiFile';

import {
  sendItem,
} from '../stores/api/apiAxios';

import AppRouter from "../layouts/AppRouter";

const mapStateToProps = (appState) => {
  return appState;
}

const mapDispatcherToProps = (dispatch) => {
  return {
    loadState: () => dispatch(loadState()),
    importItems: (file) => dispatch(importItems(file)),
    exportItems: (items) => dispatch(exportItems(items)),
    addItem: (item) => dispatch(actions.addItem(item)),
    changeItem: (item) => dispatch(actions.changeItem(item)),
    sendItem: (item, items) => dispatch(sendItem(item, items)),
    changePalette: (palette) => dispatch(actions.changePalette(palette)),
    setVisibilityFilter: (value) => dispatch(actions.setVisibilityFilter(value)),
    toggleShowProgressBar: () => dispatch(actions.toggleShowProgressBar()),
    toggleShowDeleted: () => dispatch(actions.toggleShowDeleted()),
    toggleFilter: () => dispatch(actions.toggleFilter()),
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(AppRouter);
