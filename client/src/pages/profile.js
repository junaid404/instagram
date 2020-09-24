import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "../components/shared/Header";
import { useProfilePageStyles } from "../helpers/styles";
import { getDefaultUser } from "../helpers/dummyData";
import { GearIcon } from "../helpers/icons";
import PostIcon from "../components/profile/PostIcon";
import SaveIcon from "../components/profile/SaveIcon";
import TabsPannel from "../components/profile/TabsPannel";

const Profile = () => {
  const classes = useProfilePageStyles();
  const data = getDefaultUser();
  const [activeTab, setactiveTab] = React.useState(0);

  const handleCurrentTab = (e, value) => {
    setactiveTab(value);
  };

  return (
    <React.Fragment>
      <Header />
      <Container className={classes.topMargin} maxWidth="md">
        <div className={classes.topContainer}>
          <img
            className={classes.image}
            src={data.profile_image}
            alt={data.username}
          />
          <div className={classes.subContainer}>
            <div>
              <div className={classes.line1Container}>
                <Typography className={classes.topText} variant="h6">
                  {data.username}
                </Typography>
                <Button
                  size="small"
                  className={classes.button}
                  variant="contained"
                >
                  Edit Profile
                </Button>
                <GearIcon />
              </div>
              <div className={classes.line2Container}>
                <div className={classes.container}>
                  <span className={classes.counts}>{0}</span>
                  <Typography variant="body1">posts</Typography>
                </div>
                <div className={classes.container}>
                  <span className={classes.counts}>{0}</span>
                  <Typography variant="body1">followers</Typography>
                </div>
                <div className={classes.container}>
                  <span className={classes.counts}>{0}</span>
                  <Typography variant="body1">followings</Typography>
                </div>
              </div>
            </div>
            <Typography variant="h6">{data.name}</Typography>
          </div>
        </div>
        <div className={classes.dividerMargin}>
          <Divider />
          <Toolbar className={classes.tabsContainer}>
            <Tabs
              classes={{ indicator: classes.tabsIndicator }}
              onChange={handleCurrentTab}
              value={activeTab}
            >
              <Tab className={classes.sideMargin} icon={<PostIcon />} />
              <Tab className={classes.sideMargin} icon={<SaveIcon />} />
            </Tabs>
          </Toolbar>
        </div>
        <div>
          <TabsPannel index={0} value={activeTab} />
          <TabsPannel index={1} value={activeTab} />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
