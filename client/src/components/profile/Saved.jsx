import React from "react";
import Typtography from "@material-ui/core/Typography";
import { SaveIcon } from "../../helpers/icons";
import { useProfilePageStyles } from "../../helpers/styles";

const Saved = () => {
  const classes = useProfilePageStyles();

  return (
    <div className={classes.savedContainer}>
      <div className={classes.savedImageContainer}>
        <SaveIcon className={classes.savedImage} />
      </div>
      <Typtography className={classes.savedTextH6} variant="h6">
        Save
      </Typtography>
      <Typtography className={classes.savedText} variant="subtitle1">
        Save photos and videos that you want to see again. No one is notified,
        and only you can see what you've saved.
      </Typtography>
    </div>
  );
};

export default Saved;
