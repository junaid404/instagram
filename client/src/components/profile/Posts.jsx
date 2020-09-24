import React from "react";
import MiniCard from "../shared/MiniPost";
import Grid from "@material-ui/core/Grid";
import { getPostData } from "../../helpers/dummyData";

const PostIcon = () => {
  return (
    <React.Fragment>
      {Array.from({ length: 4 }, () => getPostData()).map((data) => (
        <Grid key={data.id} item xs={6}>
          <MiniCard data={data} />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default PostIcon;
