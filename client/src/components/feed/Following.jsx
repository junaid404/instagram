import React from "react";
import Typography from "@material-ui/core/Typography";
import { useFeedPageStyles } from "../../helpers/styles";
import { Link } from "react-router-dom";

const Followings = ({ data }) => {
  const classes = useFeedPageStyles();
  return (
    <div className={classes.followings}>
      <Link to={`/${data.username}`}>
        <img
          className={classes.followingImg}
          src={data.profile_image}
          alt="profile"
        />
      </Link>
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
