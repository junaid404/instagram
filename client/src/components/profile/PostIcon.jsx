import React from "react";
import { GridIcon } from "../../helpers/icons";
import { useProfilePageStyles } from "../../helpers/styles";

const PostIcon = () => {
  const classes = useProfilePageStyles();

  return (
    <React.Fragment>
      <div>
        <GridIcon className={classes.tabsIcon} />{" "}
        <span className={classes.tabsText}>POSTS</span>
      </div>
    </React.Fragment>
  );
};

export default PostIcon;
