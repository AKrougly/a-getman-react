import React, { useState } from 'react';
import clsx from 'clsx';

import { capitalize } from "lodash";

import { List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import { useTheme, makeStyles } from '@material-ui/core/styles';
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import PaletteIcon from "@material-ui/icons/Palette";

import ColorDialog from "../components/ColorDialog";

const drawerWidth = 240;

const useStyles = (theme) =>
  makeStyles({
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

const Content = (props) => {

  const palette = props.palette;

  const [isOpen, setIsOpen] = useState(false);
  const [paletteColor, setPaletteColor] = useState("");
  
  const handlePickPrimary = () => { setPaletteColor("primary"); setIsOpen(true); }
  const handlePickSecondary = () => { setPaletteColor("secondary"); setIsOpen(true); }
  const handleToggleTheme = () => { palette.type === "light" ? props.changePalette({ ...palette, type: "dark" }) : props.changePalette({ ...palette, type: "light" }); };

  const handlePick = (color) => {

    if (paletteColor === "primary") props.changePalette({ ...palette, primary: color })
    else props.changePalette({ ...palette, secondary: color })
    setIsOpen(false);
  };

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: true,
      })}
    >
      <Toolbar />
      <List>
        <ListItem button onClick={handlePickPrimary}>
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText
            primary={capitalize(palette.primary)}
            secondary="Primary color"
          />
        </ListItem>

        <ListItem button onClick={handlePickSecondary}>
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText
            primary={capitalize(palette.secondary)}
            secondary="Secondary color"
          />
        </ListItem>

        <ListItem button onClick={handleToggleTheme}>
          <ListItemIcon>
            <InvertColorsIcon />
          </ListItemIcon>
          <ListItemText primary={capitalize(palette.type)} secondary="Theme" />
        </ListItem>
      </List>

      <ColorDialog
        open={!!isOpen}
        type={paletteColor}
        onPick={handlePick}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </main>
 );
}

export default Content;
