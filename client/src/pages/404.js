import React from "react";
import Header from "../components/shared/Header";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { useNotFoundpageStyles } from "../helpers/styles";

const NotFoundPage = () => {
  const classes = useNotFoundpageStyles();
  return (
    <React.Fragment>
      <Header minimal isAuth />
      <div className={classes.body}>
        <Typography variant="h6" className={classes.lowerText}>
          Sorry, this page isn't available.
        </Typography>
        <Typography variant="body1" className={classes.message}>
          The link you followed may be broken, or the page may have been
          removed.{" "}
          <Link className={classes.homeLink} to="/">
            Go back to Instagram.
          </Link>
        </Typography>
      </div>
    </React.Fragment>
  );
};

export default NotFoundPage;
