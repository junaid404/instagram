import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useFeedPageStyles } from "../../helpers/styles";

const SliderContent = ({ data }) => {
  const classes = useFeedPageStyles();

  return (
    <Card className={classes.suggestionsCard}>
      <img
        className={classes.suggestionsImg}
        src={data.profile_image}
        alt={data.username}
      />
      <div
        style={{
          textAlign: "center",
          margin: " 0 0 20px 0",
        }}
      >
        <Typography style={{ color: "#333", lineHeight: 1.6 }} variant="h6">
          {data.name}
        </Typography>
        <Typography
          style={{ color: "#777", lineHeight: 1 }}
          variant="subtitle2"
        >
          Suggested for you
        </Typography>
      </div>
      <Button variant="contained" color="primary">
        Follow
      </Button>
    </Card>
  );
};

export default SliderContent;
