import React from "react";
import Typography from "@material-ui/core/Typography";
import UserProfiler from "../shared/userProfiler";
import { useFeedPageStyles } from "../../helpers/styles";
import { getDefaultUser } from "../../helpers/dummyData";

const Aside = ({ data }) => {
  const classes = useFeedPageStyles();

  return (
    <div className={classes.topMargin}>
      <UserProfiler data={data.user} />
      <div className={classes.asideSuggestionsContainer}>
        <Typography
          className={classes.asideSuggestionsText}
          variant="subtitle2"
        >
          Suggestions For You
        </Typography>
        <span className={classes.asideSuggestionSpan}>See All</span>
      </div>
      <div style={{ marginTop: "20px" }}>
        {Array.from({ length: 6 }, () => getDefaultUser()).map((user) => {
          return (
            <div key={user.id} className={classes.asideFollowersContainer}>
              <UserProfiler minimal key={user.id} data={user} />
              <Typography
                className={classes.asideFollowersCaption}
                color="primary"
                variant="caption"
              >
                Follow
              </Typography>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: "30px" }}>
        <Typography variant="body2" className={classes.asideFooterText}>
          About Help Press API Jobs Privacy Terms Locations Top Accounts
          Hashtags Language English
        </Typography>
        <Typography variant="overline" className={classes.asideFooterCopyright}>
          © 2020 INSTAGRAM FROM FACEBOOK
        </Typography>
      </div>
    </div>
  );
};

export default Aside;
