import React from "react";
import clsx from 'clsx';
import { withRouter } from "react-router-dom";

import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from "../../PageTemplate";

const Header = ({ open, history: { goBack } }) => {
  
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          title="Go Back"
          onClick={() => goBack()}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Palette
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(Header);
