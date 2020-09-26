import React from "react";
import { Link, useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useEditPageStyles } from "../../helpers/styles";

const DrawerContent = () => {
  const classes = useEditPageStyles();
  const history = useHistory();
  const currentPath = history.location.pathname;
  const isEditPage = currentPath === "/accounts/edit";
  const isResetPage = currentPath === "/accounts/reset";

  return (
    <div className={classes.leftSide}>
      <Link className={classes.link} to="/accounts/edit">
        <ListItem
          className={`${classes.hoverStyle} ${isEditPage && classes.active}`}
          button
        >
          <ListItemText primary="Edit Profile" />
        </ListItem>
      </Link>
      <Link className={classes.link} to="/accounts/reset">
        <ListItem
          className={`${classes.hoverStyle} ${isResetPage && classes.active}`}
          button
        >
          <ListItemText primary="Change Password" />
        </ListItem>
      </Link>
    </div>
  );
};

export default DrawerContent;
