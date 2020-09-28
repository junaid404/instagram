import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useMoreDialog } from "../../helpers/styles";
import { authContext } from "../general/AuthContext";

const OptionsDialog = ({ onClose, open = false }) => {
  const classes = useMoreDialog();
  const { setAuthData } = React.useContext(authContext);

  const handleLogoutOperation = () => {
    setAuthData({
      loading: false,
      user: null,
      token: undefined,
    });
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <div className={classes.container}>
        <div style={{ width: "100%" }}>
          <Link to="/accounts/reset">
            <Button variant="text" fullWidth>
              Change Password
            </Button>
          </Link>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Link to="">
            <Button className={classes.padding} variant="text" fullWidth>
              Settings
            </Button>
          </Link>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Link to="/">
            <Button className={classes.padding} variant="text" fullWidth>
              Report a Problem
            </Button>
          </Link>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Link to="/accounts/edit">
            <Button className={classes.padding} variant="text" fullWidth>
              Change @username
            </Button>
          </Link>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Button
            onClick={handleLogoutOperation}
            className={classes.padding}
            variant="text"
            fullWidth
          >
            Logout
          </Button>
          <Divider />
        </div>
        <Button
          fullWidth
          className={classes.padding}
          variant="text"
          onClick={onClose}
        >
          Cancel
        </Button>
      </div>
    </Dialog>
  );
};

export default OptionsDialog;
