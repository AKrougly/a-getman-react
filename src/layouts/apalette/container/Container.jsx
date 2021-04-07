import { connect } from 'react-redux';

import * as actions from '../../../stores/actions';
import Page from '../views/Page';

const mapStateToProps = (appState) => {
  return appState;
}

const mapDispatcherToProps = (dispatch) => {
  return {
    changePalette: (palette) => dispatch(actions.changePalette(palette))
  }
}

export default connect(mapStateToProps, mapDispatcherToProps)(Page);
