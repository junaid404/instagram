import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { useMoreDialog } from "../../helpers/styles";

const MoreDialog = ({ onClose, open = false }) => {
  const classes = useMoreDialog();
  return (
    <Dialog onClose={onClose} open={open}>
      <div className={classes.container}>
        <div style={{ width: "100%" }}>
          <Button
            style={{ color: "red" }}
            className={classes.padding}
            variant="text"
            fullWidth
          >
            unFollow
          </Button>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Button className={classes.padding} variant="text" fullWidth>
            view Full Post
          </Button>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Button className={classes.padding} variant="text" fullWidth>
            Copy Link
          </Button>
          <Divider />
        </div>
        <div style={{ width: "100%" }}>
          <Button className={classes.padding} variant="text" fullWidth>
            share Post
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

export default MoreDialog;
