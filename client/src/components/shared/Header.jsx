import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/InputBase";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import OutsideClick from "react-outside-click-handler";
import UserProfiler from "../shared/userProfiler";
import { useHeaderStyles } from "../../helpers/styles";
import { getDefaultUser, defaultNotifications } from "../../helpers/dummyData";
import DefaultUserImage from "../../images/default-user-image.jpg";
import Logo from "../../images/logo.png";
import {
  HomeIcon,
  HomeActiveIcon,
  AddIcon,
  ExploreIcon,
  ExploreActiveIcon,
  LikeIcon,
  LikeActiveIcon,
} from "../../helpers/icons";

const Header = ({ isAuth = true, minimal = false }) => {
  const [isSearchFocused, setisSearchFocused] = useState(false);
  const [showNotificationT, setshowNotificationT] = useState(false);
  const history = useHistory();
  const currentRoute = history.location.pathname;
  const classes = useHeaderStyles();

  const searchStyles = isSearchFocused
    ? {
        paddingLeft: "30px",
      }
    : {
        paddingLeft: "40%",
      };

  const startAdornmentStyles = isSearchFocused ? { left: 11 } : { left: "30%" };

  const handleClearSearch = () => {
    // clear search value here
  };

  const searchResults = (
    <div>
      {Array.from({ length: 5 }, () => getDefaultUser()).map((data) => (
        <div key={data.id}>
          <div className={classes.searchToolTipItems}>
            <UserProfiler minimal data={data} />
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );

  const FollowNotification = ({ data }) => (
    <div className={classes.notificationItemsContainer}>
      <div className={classes.notificationItemsContainer}>
        <img
          className={classes.smallImg}
          src={data.user.profile_image}
          alt={data.user.name}
        />
        <div className={classes.notificationSubItemsContainer}>
          <Typography className={classes.notificationSubItemsText} variant="h6">
            {data.user.username}
          </Typography>
          <Typography style={{ color: "#999" }} variant="body2">
            Started Following You.
          </Typography>
        </div>
      </div>
      <div>
        <Button variant="contained" color="primary" size="small">
          Follow
        </Button>
      </div>
    </div>
  );

  const LikeNotification = ({ data }) => (
    <div className={classes.notificationItemsContainer}>
      <div className={classes.notificationItemsContainer}>
        <img
          className={classes.smallImg}
          src={data.user.profile_image}
          alt={data.user.name}
        />
        <div className={classes.notificationSubItemsContainer}>
          <Typography className={classes.notificationSubItemsText} variant="h6">
            {data.user.username}
          </Typography>
          <Typography style={{ color: "#999" }} variant="body2">
            Likes Your Post.
          </Typography>
        </div>
      </div>
      <img
        className={classes.LikedNotificationImg}
        src={data.post.media}
        alt={data.post.user.username}
      />
    </div>
  );

  const notificationResults = (
    <div>
      {defaultNotifications.map((data) => (
        <div key={data.id}>
          <div className={classes.notificationToolTipItems}>
            {data.type === "follow" && <FollowNotification data={data} />}
            {data.type === "like" && <LikeNotification data={data} />}
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Container maxWidth="md">
          <section className={classes.toolBar}>
            <Link to="/">
              <img className={classes.logo} src={Logo} alt="instagram" />
            </Link>
            <div>
              <Hidden smDown>
                <Tooltip
                  arrow
                  title={searchResults}
                  open={isSearchFocused}
                  interactive
                  classes={{
                    tooltip: classes.toolTipSearch,
                    arrow: classes.toolTipArrow,
                  }}
                >
                  <Input
                    type="text"
                    size="small"
                    onBlur={() => setisSearchFocused(false)}
                    onFocus={() => setisSearchFocused(true)}
                    style={{ ...searchStyles }}
                    className={classes.search}
                    placeholder="Search"
                    startAdornment={
                      <span
                        style={{ ...startAdornmentStyles }}
                        className={classes.searchIcon}
                      />
                    }
                    endAdornment={
                      isSearchFocused && (
                        <span
                          onClick={handleClearSearch}
                          className={classes.clearIcon}
                        />
                      )
                    }
                  />
                </Tooltip>
              </Hidden>
            </div>
            {!isAuth || minimal ? (
              isAuth ? (
                <Link to="/me">
                  <img
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                    alt="User"
                    className={classes.smallImg}
                    src={DefaultUserImage}
                  />
                </Link>
              ) : (
                <div>
                  <Link className={classes.link} to="/accounts/login">
                    <Button size="small" color="primary" variant="contained">
                      Log In
                    </Button>
                  </Link>
                  <Link className={classes.link} to="/accounts/emailsignup">
                    <Button color="primary" variant="text">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )
            ) : (
              <div className={classes.rightContainer}>
                <Link to="/">
                  <AddIcon style={{ cursor: "pointer", marginRight: "20px" }} />
                </Link>
                <Link to="/">
                  {currentRoute === "/" ? (
                    <HomeActiveIcon
                      style={{ cursor: "pointer", marginRight: "20px" }}
                    />
                  ) : (
                    <HomeIcon
                      style={{ cursor: "pointer", marginRight: "20px" }}
                    />
                  )}
                </Link>
                <Link to="/explore">
                  {currentRoute === "/explore" ? (
                    <ExploreActiveIcon
                      style={{ cursor: "pointer", marginRight: "20px" }}
                    />
                  ) : (
                    <ExploreIcon
                      style={{ cursor: "pointer", marginRight: "20px" }}
                    />
                  )}
                </Link>
                <OutsideClick
                  onOutsideClick={() => setshowNotificationT(false)}
                >
                  <Tooltip
                    arrow
                    title={notificationResults}
                    open={showNotificationT}
                    interactive
                    classes={{
                      tooltip: classes.notificationTooltip,
                      arrow: classes.notificationTooltipArrow,
                    }}
                  >
                    <div
                      onClick={() => setshowNotificationT(!showNotificationT)}
                    >
                      {showNotificationT ? (
                        <LikeActiveIcon
                          style={{ cursor: "pointer", marginRight: "10px" }}
                        />
                      ) : (
                        <div className={classes.notificationIconContainer}>
                          <LikeIcon
                            style={{ cursor: "pointer", marginRight: "10px" }}
                          />
                          <span className={classes.notificationIcon}></span>
                        </div>
                      )}
                    </div>
                  </Tooltip>
                </OutsideClick>
                <Link to="/me">
                  <img
                    style={{ cursor: "pointer", marginLeft: "10px" }}
                    alt="User"
                    className={classes.smallImg}
                    src={DefaultUserImage}
                  />
                </Link>
              </div>
            )}
          </section>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
