import React, { useState } from 'react';
import clsx from 'clsx';

import { capitalize } from "lodash";

import { List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import PaletteIcon from "@material-ui/icons/Palette";
import { useTheme } from '@material-ui/core/styles';

import { useStyles } from "../../PageTemplate";
import ColorDialog from "../components/ColorDialog";

const Content = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [paletteColor, setPaletteColor] = useState("");
  
  const handlePickPrimary = () => { setPaletteColor("primary"); setIsOpen(true); }
  const handlePickSecondary = () => { setPaletteColor("secondary"); setIsOpen(true); }
  const handleToggleTheme = () => {
    props.palette.type === "light" ?
    props.changePalette({ ...props.palette, type: "dark" }) :
    props.changePalette({ ...props.palette, type: "light" });
  };

  const handlePick = (color) => {

    if (paletteColor === "primary") props.changePalette({ ...props.palette, primary: color })
    else props.changePalette({ ...props.palette, secondary: color })
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
            primary={capitalize(props.palette.primary)}
            secondary="Primary color"
          />
        </ListItem>

        <ListItem button onClick={handlePickSecondary}>
          <ListItemIcon>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText
            primary={capitalize(props.palette.secondary)}
            secondary="Secondary color"
          />
        </ListItem>

        <ListItem button onClick={handleToggleTheme}>
          <ListItemIcon>
            <InvertColorsIcon />
          </ListItemIcon>
          <ListItemText primary={capitalize(props.palette.type)} secondary="Theme" />
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
