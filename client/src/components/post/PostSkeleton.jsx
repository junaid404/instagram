import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";
import Container from "@material-ui/core/Container";
import { usePostCardSkeletonStyles } from "../../helpers/styles";

const PostSkeleton = () => {
  const classes = usePostCardSkeletonStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" className={classes.topMargin}>
        <Card className={classes.card}>
          <Grid container>
            <Grid item xs={8}>
              <Skeleton
                animation="wave"
                width="100%"
                height={600}
                variant="rect"
              />
            </Grid>
            <Grid item xs={4}>
              <div className={classes.headContainer}>
                <Skeleton
                  animation="wave"
                  variant="circle"
                  height={60}
                  width={60}
                />
                <Skeleton
                  className={classes.text1}
                  animation="wave"
                  variant="text"
                  width="48%"
                  height={30}
                />
              </div>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default PostSkeleton;
