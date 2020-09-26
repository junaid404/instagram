import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import CardHead from "../shared/CardHead";
import CardBottom from "../shared/CardBottom";
import { useSinglePostStyles } from "../../helpers/styles";

const TopPost = ({ data }) => {
  const classes = useSinglePostStyles();

  return (
    <Card className={classes.topCard}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <Hidden mdUp>
            <CardHead data={data} />
          </Hidden>
          <div className={classes.fixedHeight}>
            <img
              className={classes.fullWidth}
              src={data.media}
              alt={data.user.username}
            />
          </div>
          <Hidden mdUp>
            <div>
              <Divider />
              <CardBottom minimal data={data} />
            </div>
          </Hidden>
        </Grid>
        <Hidden smDown>
          <Grid item xs={4} className={classes.postCardContainer}>
            <div>
              <CardHead data={data} />
              <Typography
                style={{ padding: "10px" }}
                dangerouslySetInnerHTML={{ __html: data.caption }}
              ></Typography>
            </div>
            <div>
              <Divider />
              <CardBottom minimal data={data} />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </Card>
  );
};

export default TopPost;
