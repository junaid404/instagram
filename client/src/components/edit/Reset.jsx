import React from "react";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useEditPageStyles } from "../../helpers/styles";
import { Typography } from "@material-ui/core";

const Reset = ({ data }) => {
  const classes = useEditPageStyles();

  return (
    <form>
      <div className={classes.resetContainer}>
        <div className={classes.resetSubContainer}>
          <img
            className={classes.resetImage}
            src={data.profile_image}
            alt={data.username}
          />
          <Typography variant="h6">{data.username}</Typography>
        </div>
        <div>
          <label className={classes.label} htmlFor="old">
            Old Password
          </label>
          <Input
            variant="outlined"
            size="small"
            fullWidth
            className={classes.input}
          />
        </div>
        <div>
          <label htmlFor="new">New Password</label>
          <Input
            variant="outlined"
            size="small"
            type="password"
            fullWidth
            className={classes.input}
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm New Password</label>
          <Input
            variant="outlined"
            size="small"
            type="password"
            fullWidth
            className={classes.input}
          />
        </div>
        <div className={classes.Button}>
          <Button type="submit" color="primary" variant="contained">
            Change Password
          </Button>
        </div>
        <Link className={classes.Link} to="/accounts/forget">
          <Button color="primary" variant="text">
            Forget Password?
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Reset;
