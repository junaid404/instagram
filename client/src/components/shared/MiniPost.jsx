import React from "react";
import { useExplorePageStyles } from "../../helpers/styles";
import { Link } from "react-router-dom";
import { LikeWhiteIcon, CommentWhiteIcon } from "../../helpers/icons";

const MiniPost = ({ data }) => {
  const classes = useExplorePageStyles();
  return (
    <React.Fragment>
      <div className={classes.topHeight}>
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
            className={classes.leftSmImg}
            src={data.media}
            alt={data.user.username}
          />
        </Link>
      </div>
    </React.Fragment>
  );
};

export default MiniPost;
