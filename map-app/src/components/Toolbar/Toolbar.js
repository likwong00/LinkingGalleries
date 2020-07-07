import React from "react";
import { useHistory } from 'react-router-dom'
import Logo from "./logo.png";
import "./Toolbar.css";
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import Typography from "@material-ui/core/Typography";

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">About Us</DialogTitle>
        <Typography variant="body1" align="center"> Bristol Museums care for nearly 2 million objects. Use this interactive map to explore the
          objects that relate to places in Bristol. To find out more about the collections
          visit https://www.bristolmuseums.org.uk/collections/</Typography>
      </Dialog>
  );
}

export default function Toolbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  const handleAdminOpen = () => {
    history.push('/admin');
  };

  return (
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <img src={Logo} height="56px" width="100px"/>
          <div className="toolbar_logo">
            <a href="/">Linking Galleries</a>
          </div>
          <div className="spacer"/>
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <Button onClick={handleClickOpen}>About Us</Button>
                <SimpleDialog open={open} onClose={handleClose}/>
              </li>
              <li>
                <Button onClick={handleAdminOpen}>Admin</Button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
  );
}

