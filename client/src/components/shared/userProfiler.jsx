import React from "react";
import Typtography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useUserProfilerCompStyles } from "../../helpers/styles";

const UserProfile = ({ data, minimal }) => {
  const classes = useUserProfilerCompStyles();

  return (
    <div className={classes.container}>
      <img
        className={minimal ? classes.smallImg : classes.image}
        src={`${data.profile_image}`}
        alt={data.username}
      />
      <div className={classes.subContainer}>
        <Link className={classes.link} to={`/${data.username}`}>
          <Typtography className={classes.headingText} variant="h6">
            {data.username}
          </Typtography>
        </Link>
        <Typtography className={classes.normalText} variant="caption">
          {data.name}
        </Typtography>
      </div>
    </div>
  );
};

export default UserProfile;
