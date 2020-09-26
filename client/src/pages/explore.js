import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Header from "../components/shared/Header";
import { useExplorePageStyles } from "../helpers/styles";
import { getPostData } from "../helpers/dummyData";
import BigPost from "../components/explore/BigPost";
import MiniPost from "../components/shared/MiniPost";

const Explore = () => {
  const classes = useExplorePageStyles();

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.topMargin} maxWidth="md">
        <Grid spacing={3} container>
          <Hidden smDown>
            <Grid xs={4} item>
              {Array.from({ length: 2 }, () => getPostData()).map((data) => (
                <MiniPost key={data.id} data={data} />
              ))}
            </Grid>
          </Hidden>
          <Grid md={8} sm={12} item>
            {Array.from({ length: 1 }, () => getPostData()).map((data) => (
              <BigPost key={data.id} data={data} />
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {Array.from({ length: 12 }, () => getPostData()).map((data) => (
            <Grid key={data.id} xs={6} md={4} item>
              <MiniPost data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Explore;
