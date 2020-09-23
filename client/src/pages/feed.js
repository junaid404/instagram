import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Hidden from "@material-ui/core/Hidden";
import Header from "../components/shared/Header";
import Followings from "../components/feed/Following";
import Aside from "../components/feed/Aside";
import FeedSlider from "../components/feed/FeedSlider";
import FeedSkeleton from "../components/feed/FeedCardSkeleton";
import { useFeedPageStyles } from "../helpers/styles";
import { getDefaultUser, getPostData } from "../helpers/dummyData";
const FeedCard = React.lazy(() => import("../components/feed/FeedCard"));

const FeedPage = () => {
  const [isAuth] = useState(true);
  const classes = useFeedPageStyles();
  const data = getPostData();
  const users = Array.from({ length: 6 }, () => getDefaultUser());

  return (
    <React.Fragment>
      <Header isAuth={isAuth} />
      <Container maxWidth="md" className={classes.container}>
        <Grid spacing={4} container>
          <Grid item xs={12} md={8}>
            {/* Following Card */}
            <Card className={classes.card}>
              <div className={classes.mainFollowingContainer}>
                {Array.from({ length: 2 }, () => getDefaultUser()).map(
                  (data) => (
                    <Followings key={data.id} data={data} />
                  )
                )}
              </div>
            </Card>
            {/* Feed Card & Slider */}
            <div style={{ marginTop: "40px" }}>
              {Array.from({ length: 5 }, () => getPostData()).map(
                (data, index) => {
                  if (index === 1)
                    return (
                      <React.Fragment key={data.id}>
                        <FeedSlider data={users} />
                        <React.Suspense fallback={<FeedSkeleton />}>
                          <FeedCard key={data.id} data={data} />
                        </React.Suspense>
                      </React.Fragment>
                    );
                  return (
                    <React.Suspense fallback={<FeedSkeleton />}>
                      <FeedCard key={data.id} data={data} />
                    </React.Suspense>
                  );
                }
              )}
            </div>
            {/* Aside */}
          </Grid>
          <Hidden smDown>
            <Grid item md={4}>
              <Aside data={data} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default FeedPage;
