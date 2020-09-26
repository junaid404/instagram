import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useFeedPageStyles } from "../../helpers/styles";
import { MoreIcon } from "../../helpers/icons";
import MoreDialog from "../feed/Dialog";

const CardHead = ({ data }) => {
  const [openDialog, setopenDialog] = React.useState(false);
  const classes = useFeedPageStyles();

  return (
    <React.Fragment>
      <MoreDialog open={openDialog} onClose={() => setopenDialog(false)} />
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
          onClick={() => setopenDialog(!openDialog)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Divider />
    </React.Fragment>
  );
};

export default CardHead;
