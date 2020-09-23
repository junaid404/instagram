import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/shared/Header";
import { useExplorePageStyles } from "../helpers/styles";
import { getPostData } from "../helpers/dummyData";
import { LikeWhiteIcon, CommentWhiteIcon } from "../helpers/icons";
import { Link } from "react-router-dom";
import MiniPost from "../components/shared/MiniPost";

const Explore = () => {
  const classes = useExplorePageStyles();

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.topMargin} maxWidth="md">
        <Grid spacing={3} container>
          <Grid xs={4} item>
            {Array.from({ length: 2 }, () => getPostData()).map((data) => (
              <MiniPost key={data.id} data={data} />
            ))}
          </Grid>
          <Grid xs={8} item>
            {Array.from({ length: 1 }, () => getPostData()).map((data) => (
              <div key={data.id} className={classes.topRightHeight}>
                <Link to={`/p/${data.id}`}>
                  <div className={classes.overlay}>
                    <div className={classes.exploreOverlayContainer}>
                      <div className={classes.overlayTextContainer}>
                        <LikeWhiteIcon />
                        <span className={classes.overlayText}>
                          {data.likes}
                        </span>
                      </div>
                      <div className={classes.overlayTextContainer}>
                        <CommentWhiteIcon />
                        <span className={classes.overlayText}>
                          {data.comments.length}
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    className={classes.RightHeroImg}
                    src={data.media}
                    alt={data.user.username}
                  />
                </Link>
              </div>
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {Array.from({ length: 12 }, () => getPostData()).map((data) => (
            <Grid key={data.id} xs={4} item>
              <MiniPost data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Explore;
