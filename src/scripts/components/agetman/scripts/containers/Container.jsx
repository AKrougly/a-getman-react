import { connect } from 'react-redux';
import View from '../views/View';
import {
	actionToggleShowProgressBar,
	actionSetVisibilityFilter,
	actionToggleFilter,
	actionToggleShowDeleted,
	actionAddItem,
	actionChangeItem,
} from '../actions/actionObjects';

import {
  actionLoadState,
  actionImportItems,
  actionExportItems,
  actionSendItem,
} from '../api/apiAxios';

function mapStateToProps(store) {
  return store;
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowProgressBar: () => dispatch(actionToggleShowProgressBar()),
    setVisibilityFilter: (value) => dispatch(actionSetVisibilityFilter(value)),
    toggleFilter: () => dispatch(actionToggleFilter()),
    toggleShowDeleted: () => dispatch(actionToggleShowDeleted()),
    loadState: () => dispatch(actionLoadState()),
    addItem: (item) => dispatch(actionAddItem(item)),
    changeItem: (item) => dispatch(actionChangeItem(item)),
    importItems: (file) => dispatch(actionImportItems(file)),
    exportItems: (items) => dispatch(actionExportItems(items)),
    sendItem: (item, items) => dispatch(actionSendItem(item, items)),
  };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(View);

export default Container;
