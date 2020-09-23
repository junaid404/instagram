import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import OR from "../components/shared/OR";
import Input from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookWhteLogo from "../images/facebook-icon-white.png";
import { Link } from "react-router-dom";
import { useSignupPageStyles } from "../helpers/styles";

const Signup = () => {
  const classes = useSignupPageStyles();
  return (
    <React.Fragment>
      <Container maxWidth="xs" className={classes.box}>
        <Card className={classes.card}>
          <div className={classes.cardHeader} />
          <div>
            <Typography variant="h6" className={classes.heading}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={
                  <img
                    className={classes.icon}
                    src={FacebookWhteLogo}
                    alt="facebook"
                  />
                }
              >
                Log in with Facebook
              </Button>
            </div>
          </div>
          <OR />
          <div>
            <form>
              <div>
                <Input
                  placeholder="Mobile Number or Email"
                  size="small"
                  fullWidth
                  type="text"
                  variant="outlined"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 14, padding: 10 } }}
                />
              </div>
              <div>
                <Input
                  placeholder="Full Name"
                  size="small"
                  fullWidth
                  type="text"
                  variant="outlined"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 14, padding: 10 } }}
                />
              </div>
              <div>
                <Input
                  placeholder="User Name"
                  size="small"
                  fullWidth
                  type="text"
                  variant="outlined"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 14, padding: 10 } }}
                />
              </div>
              <div>
                <Input
                  placeholder="Password"
                  size="small"
                  fullWidth
                  type="password"
                  variant="outlined"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 14, padding: 10 } }}
                />
              </div>
              <div>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  fullWidth
                  className={classes.submitButton}
                >
                  Sign up
                </Button>
              </div>
            </form>
          </div>
          <div>
            <Typography className={classes.smallText} variant="body2">
              By signing up, you agree to our{" "}
              <span className={classes.highLightText}>
                Terms , Data Policy{" "}
              </span>
              and <span className={classes.highLightText}>Cookies Policy</span>{" "}
              .
            </Typography>
          </div>
        </Card>
        <Card className={classes.gutter}>
          <Toolbar className={classes.container}>
            <Typography className={classes.container} variant="body1">
              Have an account? &nbsp;
              <Link className={classes.navigationLink} to="/accounts/login">
                Log in
              </Link>
            </Typography>
          </Toolbar>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Signup;
