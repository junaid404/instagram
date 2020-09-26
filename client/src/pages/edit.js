import React from "react";
import Header from "../components/shared/Header";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Reset from "../components/edit/Reset";
import EditComp from "../components/edit/Edit";
import MenuIcon from "../components/edit/MenuIcon";
import DrawerContent from "../components/edit/DrawrContent";
import SideLinks from "../components/edit/SideLinks";
import { useEditPageStyles } from "../helpers/styles";
import { getDefaultUser } from "../helpers/dummyData";
import { useHistory } from "react-router-dom";

const Edit = () => {
  const theme = useTheme();
  const history = useHistory();
  const classes = useEditPageStyles();
  const [openDrawer, setopenDrawer] = React.useState(false);
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
        <DrawerContent />
      </SwipeableDrawer>
      <Header />
      <Container className={classes.topMargin} maxWidth="md">
        <Card>
          <Grid container>
            <Grid item xs={1} md={4}>
              {!matches ? (
                <SideLinks />
              ) : (
                <div className={classes.menuIconContainer}>
                  <MenuIcon onClick={() => setopenDrawer(!openDrawer)} />
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
