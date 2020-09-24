import React from "react";
import { SaveIcon } from "../../helpers/icons";
import { useProfilePageStyles } from "../../helpers/styles";

const PostIcon = () => {
  const classes = useProfilePageStyles();

  return (
    <React.Fragment>
      <div>
        <SaveIcon className={classes.tabsIcon} />{" "}
        <span className={classes.tabsText}>SAVED</span>
      </div>
    </React.Fragment>
  );
};

export default PostIcon;
