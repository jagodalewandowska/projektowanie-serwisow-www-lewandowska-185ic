import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Alert() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: 20}}>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen} style={{fontFamily: 'Bevan'}}>
        Tell us what you think!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"What are you more interested in?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            We're so curious what you think!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Instruments
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Composers
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
