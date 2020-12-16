import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

const initialState = {
  mouseX: null,
  mouseY: null,
};

export default function ContextMenu() {
  const [state, setState] = React.useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  return (
    <div onContextMenu={handleClick} style={{ cursor: 'context-menu', padding: 10 }}>
      <Typography style = {{fontFamily: 'Pacifico'}}>
        A composer (Latin compōnō; literally "one who puts together") is a musician who is an author of music in any form, including vocal music (for a singer or choir), instrumental music, electronic music, and music which combines multiple forms. A composer may create music in any music genre, including, for example, classical music, musical theatre, blues, folk music, jazz, and popular music. Composers often express their works in a written musical score using musical notation. Many composers are, or were, also skilled performers of music.
      </Typography>
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
      </Menu>
    </div>
  );
}