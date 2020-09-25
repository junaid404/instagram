import React from "react";
import Header from "../components/shared/Header";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Reset from "../components/edit/Reset";
import EditComp from "../components/edit/Edit";
import MenuIcon from "../images/menu.svg";
import { useEditPageStyles } from "../helpers/styles";
import { getDefaultUser } from "../helpers/dummyData";
import { Link, useHistory } from "react-router-dom";

const Edit = () => {
  const [openDrawer, setopenDrawer] = React.useState(false);
  const theme = useTheme();
  const history = useHistory();
  const classes = useEditPageStyles();
  const currentPath = history.location.pathname;
  const isEditPage = currentPath === "/accounts/edit";
  const isResetPage = currentPath === "/accounts/reset";
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const user = getDefaultUser();

  return (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        onOpen={() => setopenDrawer(true)}
        onClose={() => setopenDrawer(false)}
      >
        <div className={classes.leftSide}>
          <Link className={classes.link} to="/accounts/edit">
            <ListItem
              className={`${classes.hoverStyle} ${
                isEditPage && classes.active
              }`}
              button
            >
              <ListItemText primary="Edit Profile" />
            </ListItem>
          </Link>
          <Link className={classes.link} to="/accounts/reset">
            <ListItem
              className={`${classes.hoverStyle} ${
                isResetPage && classes.active
              }`}
              button
            >
              <ListItemText primary="Change Password" />
            </ListItem>
          </Link>
        </div>
      </SwipeableDrawer>
      <Header />
      <Container className={classes.topMargin} maxWidth="md">
        <Card>
          <Grid container>
            <Grid item xs={1} md={4}>
              {!matches ? (
                <div className={classes.leftSide}>
                  <Link className={classes.link} to="/accounts/edit">
                    <ListItem
                      className={`${classes.hoverStyle} ${
                        isEditPage && classes.active
                      }`}
                      button
                    >
                      <ListItemText primary="Edit Profile" />
                    </ListItem>
                  </Link>
                  <Link className={classes.link} to="/accounts/reset">
                    <ListItem
                      className={`${classes.hoverStyle} ${
                        isResetPage && classes.active
                      }`}
                      button
                    >
                      <ListItemText primary="Change Password" />
                    </ListItem>
                  </Link>
                </div>
              ) : (
                <div className={classes.menuIconContainer}>
                  <img
                    onClick={() => setopenDrawer(!openDrawer)}
                    className={classes.menuIcon}
                    src={MenuIcon}
                    alt="menu"
                  />
                </div>
              )}
            </Grid>
            <Grid className={classes.rightSide} item xs={11} md={8}>
              {isEditPage && <EditComp data={user} />}
              {isResetPage && <Reset data={user} />}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Edit;
