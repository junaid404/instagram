import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import EllipsisLines from "react-lines-ellipsis/lib/html";
import { formatPostDate } from "../../helpers/dateFormatter";
import { useFeedPageStyles } from "../../helpers/styles";
import {
  CommentIcon,
  ShareIcon,
  SaveIcon,
  LikeIcon,
  LikeActiveIcon,
} from "../../helpers/icons";

const CardBottom = ({ data, minimal }) => {
  const classes = useFeedPageStyles();
  const [isLiked] = React.useState(false);
  const [isCollapsed, setisCollapsed] = React.useState(false);

  const iconLike = isLiked ? (
    <LikeActiveIcon style={{ cursor: "pointer" }} />
  ) : (
    <LikeIcon style={{ cursor: "pointer" }} />
  );

  const likes =
    data.likes === 1 ? (
      <Typography className={classes.feedCardFooterLkes} variant="h6">
        1 like
      </Typography>
    ) : (
      <Typography className={classes.feedCardFooterLkes} variant="h6">
        {data.likes} likes
      </Typography>
    );

  return (
    <React.Fragment>
      <div style={{ marginBottom: "5px" }}>
        <div className={classes.feedCardFooterIconsContainer}>
          <div className={classes.feedCardHeadSubContainer}>
            {iconLike} &nbsp;&nbsp;&nbsp;
            <CommentIcon style={{ cursor: "pointer" }} /> &nbsp;&nbsp;&nbsp;
            <ShareIcon style={{ cursor: "pointer" }} /> &nbsp;&nbsp;&nbsp;
          </div>
          <SaveIcon style={{ cursor: "pointer" }} />
        </div>
        {likes}
        {!minimal && (
          <div>
            {!isCollapsed ? (
              <div className={classes.feedCardHeadSubContainer}>
                <EllipsisLines
                  unsafeHTML={data.caption}
                  maxLine="0"
                  className={classes.feedCardEllipsis}
                  basedOn="letters"
                />
                <Button
                  disableRipple
                  size="small"
                  onClick={() => setisCollapsed(true)}
                  className={classes.feedCardMoreButton}
                  variant="text"
                >
                  more
                </Button>
              </div>
            ) : (
              <Typography
                dangerouslySetInnerHTML={{ __html: data.caption }}
                className={classes.feedCardEllipsis}
              ></Typography>
            )}
          </div>
        )}

        {!minimal && (
          <React.Fragment>
            <span>
              <Typography
                variant="subtitle1"
                component="span"
                style={{ color: "#999" }}
                className={classes.feedCardEllipsis}
              >{`view all ${14} comments`}</Typography>
            </span>
            <div>
              {data.comments.map((comment) => (
                <Typography
                  variant="subtitle1"
                  className={classes.feedCardEllipsis}
                >
                  {comment.message}
                </Typography>
              ))}
            </div>
          </React.Fragment>
        )}
        <div>
          {minimal && <br />}
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.feedCardFooterDate}
          >
            {formatPostDate(data.created_at)}
          </Typography>
        </div>
      </div>
      <Divider />
      <Toolbar>
        <InputBase
          multiline
          rowsMax={3}
          placeholder="Add a comment..."
          fullWidth
        />
        <Button color="primary" variant="text">
          Post
        </Button>
      </Toolbar>
    </React.Fragment>
  );
};

export default CardBottom;
