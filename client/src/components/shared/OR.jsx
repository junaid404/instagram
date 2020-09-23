import React from "react";
import Typography from "@material-ui/core/Typography";
import { useORComponentStyles } from "../../helpers/styles";

const OR = () => {
  const classes = useORComponentStyles();
  return (
    <div className={classes.container}>
      <span className={classes.line}></span>
      <Typography className={classes.text} variant="h6">
        OR
      </Typography>
      <span className={classes.line}></span>
    </div>
  );
};

export default OR;
