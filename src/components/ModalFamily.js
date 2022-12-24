import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalFamily({image,Icon,Bcolor}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{height:'3rem',marginLeft:'1rem',marginRight:'1rem'}}>
        <Icon/>
      </Button>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: `${Bcolor}`,
            boxShadow: 'none',
          },
        }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{padding:'0'}}>
            <img src={image} style={ {height:'500px'}} alt="imag1" />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}