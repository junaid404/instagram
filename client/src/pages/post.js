import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Header from "../components/shared/Header";
import MiniPost from "../components/shared/MiniPost";
import PostSkeleton from "../components/post/PostSkeleton";
import TopPost from "../components/post/TopCard";
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
          <TopPost data={data} />
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
