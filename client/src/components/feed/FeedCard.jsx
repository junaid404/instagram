import React from "react";
import Card from "@material-ui/core/Card";
import CardHead from "../shared/CardHead";
import CardBottom from "../shared/CardBottom";
import { useFeedPageStyles } from "../../helpers/styles";
import Dialog from "./Dialog";

const FeedCard = ({ data }) => {
  const classes = useFeedPageStyles();
  const [openDialog, setopenDialog] = React.useState(false);

  return (
    <div>
      <Dialog onClose={() => setopenDialog(false)} open={openDialog} />
      <Card className={classes.feedCardBottom}>
        {/* Head */}
        <CardHead data={data} />
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
        <CardBottom data={data} />
      </Card>
    </div>
  );
};
export default FeedCard;
