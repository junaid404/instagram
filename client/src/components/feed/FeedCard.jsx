import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import EllipsisLines from "react-lines-ellipsis/lib/html";
import { formatPostDate } from "../../helpers/dateFormatter";
import { useFeedPageStyles } from "../../helpers/styles";
import Dialog from "./Dialog";
import {
  MoreIcon,
  LikeIcon,
  LikeActiveIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
} from "../../helpers/icons";

const FeedCard = ({ data }) => {
  const classes = useFeedPageStyles();
  const [isLiked] = React.useState(false);
  const [isCollapsed, setisCollapsed] = React.useState(false);
  const [openDialog, setopenDialog] = React.useState(false);

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
    <div>
      <Dialog onClose={() => setopenDialog(false)} open={openDialog} />
      <Card className={classes.feedCardBottom}>
        {/* Head */}
        <div className={classes.feedCardHeadContainer}>
          <div className={classes.feedCardHeadSubContainer}>
            <img
              className={classes.feedCardHeadImg}
              src={data.user.profile_image}
              alt={data.user.username}
            />
            <Typography className={classes.feedCardHeadText} variant="h6">
              {data.user.username}
            </Typography>
          </div>
          <MoreIcon
            onClick={() => setopenDialog(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* Image */}
        <img
          src={data.media}
          alt={data.user.username}
          style={{
            width: "100%",
            minHeight: "100px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Footer */}
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
          <div>
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
      </Card>
    </div>
  );
};
export default FeedCard;
