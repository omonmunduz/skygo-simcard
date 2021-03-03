import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const SupportedCountriesEurope = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Supported Countries
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Europe
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <ul>
              <li>Portugal</li>
              <li>Estonia</li>
              <li>Gibraltar</li>
              <li>Serbia</li>
              <li>Denmark</li>
              <li>Germany</li>
              <li>Russia</li>
              <li>Latvia</li>
              <li>Ukraine</li>
              <li>Belgium</li>
              <li>UK</li>
              <li>Slovenia</li>
              <li>Belarus</li>
              <li>Hungary</li>
            </ul>
          </Typography>
          <Typography gutterBottom>
          <ul>
              <li>Albania</li>
              <li>Czech</li>
              <li>Lithuania</li>
              <li>Spain</li>
              <li>Liechtenstein</li>
              <li>Moldova</li>
              <li>Norway</li>
              <li>French Guiana</li>
              <li>Iceland</li>
              <li>Italy</li>
              <li>Bosnia and Herzegovina</li>
              <li>France</li>
              <li>Luxembourg</li>
              <li>Slovakia</li>
              
            </ul>
          </Typography>
          <Typography gutterBottom>
          <ul>
              <li>Croatia</li>
              <li>Finland</li>
              <li>Malta</li>
              <li>Guadelope</li>
              <li>Bulgaria</li>
              <li>Romania</li>
              <li>Switzerland</li>
              <li>Greece</li>
              <li>Montenegro</li>
              <li>Poland</li>
              <li>Cyprus</li>
              <li>Ireland</li>
              <li>Netherlands</li>
              <li>Austria</li>
              <li>Sweden</li>
            </ul>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SupportedCountriesEurope;