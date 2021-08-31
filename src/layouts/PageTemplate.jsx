import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Print, NoPrint } from "./Print";
import TopFab from "./TopFab";

const drawerWidth = 240;

const appStyles = (theme) =>
createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  tabroot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
});

export const useStyles = makeStyles(appStyles);

const PageTemplate = ({
  Header = null,
  Drawer = null,
  Content = null,
  print = null,
  topFab = true,
}) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Fragment>
        <NoPrint>
          {topFab && <TopFab />}
          {!!Drawer && Drawer}
          {!!Header && Header}
          {!!Content && Content}
        </NoPrint>
        <Print>{!!print && print}</Print>
      </Fragment>
    </div>
  );
}

PageTemplate.propTypes = {
  topFab: PropTypes.bool,
  content: PropTypes.element,
  drawer: PropTypes.element,
  header: PropTypes.element,
  print: PropTypes.element
};

export default PageTemplate;
