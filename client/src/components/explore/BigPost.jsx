import React from "react";
import { useExplorePageStyles } from "../../helpers/styles";
import { LikeWhiteIcon, CommentWhiteIcon } from "../../helpers/icons";
import { Link } from "react-router-dom";

const Explore = ({ data }) => {
  const classes = useExplorePageStyles();

  return (
    <div className={classes.topRightHeight}>
      <Link to={`/p/${data.id}`}>
        <div className={classes.overlay}>
          <div className={classes.exploreOverlayContainer}>
            <div className={classes.overlayTextContainer}>
              <LikeWhiteIcon />
              <span className={classes.overlayText}>{data.likes}</span>
            </div>
            <div className={classes.overlayTextContainer}>
              <CommentWhiteIcon />
              <span className={classes.overlayText}>
                {data.comments.length}
              </span>
            </div>
          </div>
        </div>
        <img
          className={classes.RightHeroImg}
          src={data.media}
          alt={data.user.username}
        />
      </Link>
    </div>
  );
};

export default Explore;
