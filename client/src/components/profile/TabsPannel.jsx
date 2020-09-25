import React from "react";
import Grid from "@material-ui/core/Grid";
import Posts from "./Posts";
import Saved from "./Saved";

const TabsPannel = ({ index, value }) => {
  switch (true) {
    case index === 0 && value === 0:
      return (
        <Grid container spacing={2}>
          <Posts />
        </Grid>
      );
    case index === 1 && value === 1:
      return <Saved />;
    default:
      return "";
  }
};

export default TabsPannel;
