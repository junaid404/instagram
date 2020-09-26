import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Header from "../components/shared/Header";
import MiniPost from "../components/shared/MiniPost";
import CardHead from "../components/shared/CardHead";
import CardBottom from "../components/shared/CardBottom";
import PostSkeleton from "../components/post/PostSkeleton";
import { useParams } from "react-router-dom";
import { getPostData } from "../helpers/dummyData";
import { useSinglePostStyles } from "../helpers/styles";

const SinglePost = () => {
  const [data, setdata] = useState(null);
  const location = useParams();
  const classes = useSinglePostStyles();

  useEffect(() => {
    setTimeout(() => {
      setdata(getPostData());
    }, 2000);
  }, [location.postId]);

  return (
    <React.Fragment>
      <Header />
      {!data ? (
        <PostSkeleton />
      ) : (
        <Container maxWidth="md" className={classes.topMargin}>
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
          <Divider />
          <Typography className={classes.suggestionsText} variant="h6">
            More Posts From{" "}
            <span className={classes.suggestionsBold}>
              @{data.user.username}
            </span>
          </Typography>
          <Grid container spacing={3}>
            {Array.from({ length: 6 }, () => getPostData()).map((data) => (
              <Grid key={data.id} item md={4} xs={6}>
                <MiniPost data={data} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
};

export default SinglePost;
