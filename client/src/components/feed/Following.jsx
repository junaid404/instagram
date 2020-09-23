import React from "react";
import Typography from "@material-ui/core/Typography";
import { useFeedPageStyles } from "../../helpers/styles";

const Followings = ({ data }) => {
  const classes = useFeedPageStyles();
  return (
    <div className={classes.followings}>
      <img
        className={classes.followingImg}
        src={data.profile_image}
        alt="profile"
      />
      <Typography
        className={classes.followingText}
        component="span"
        variant="subtitle1"
      >
        {data.username}
      </Typography>
    </div>
  );
};

export default Followings;
