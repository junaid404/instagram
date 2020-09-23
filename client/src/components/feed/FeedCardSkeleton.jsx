import React from "react";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import { useFeedCardSkeletonStyles } from "../../helpers/styles";

const FeedCard = () => {
  const classes = useFeedCardSkeletonStyles();

  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.headContainer}>
          <Skeleton variant="circle" width={60} height={60} animation="wave" />
          <Skeleton
            className={classes.text1}
            variant="text"
            width="40%"
            height={34}
            animation="wave"
          />
        </div>
        <Skeleton variant="rect" height={600} animation="wave" />
      </Card>
    </div>
  );
};
export default FeedCard;
