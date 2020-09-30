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
import { LoadingIcon } from "../helpers/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import { HighlightOff, CheckCircleOutline } from "@material-ui/icons";
import { useMutation } from "@apollo/client";
import { SIGNUP } from "../graphql/Mutations";
import { useHistory } from "react-router-dom";
import { authContext } from "../components/general/AuthContext";
import {
  checkName,
  checkEmail,
  checkPassword,
  checkUsername,
} from "../helpers/validators";

const Signup = () => {
  const classes = useSignupPageStyles();
  const { setAuthData } = React.useContext(authContext);
  const [formData, setformData] = React.useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [execute, { loading }] = useMutation(SIGNUP);
  const [validName, setvalidName] = React.useState(true);
  const [validUname, setvalidUname] = React.useState(true);
  const [validPass, setvalidPass] = React.useState(true);
  const [validEmail, setvalidEmail] = React.useState(true);
  const [error, seterror] = React.useState(null);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setformData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSignupOperation = async (event) => {
    event.preventDefault();
    const { name, email, password, username } = formData;

    const checkedemail = checkEmail(email);
    if (checkedemail.error) {
      setvalidEmail(false);
      return;
    }

    const checkedName = checkName(name);
    if (checkedName.error) {
      setvalidName(false);
      setvalidEmail(true);
      return;
    }

    const checkedUsername = checkUsername(username);
    if (checkedUsername.error) {
      setvalidUname(false);
      setvalidName(true);
      return;
    }

    const checkedPass = checkPassword(password);
    if (checkedPass.error) {
      setvalidPass(false);
      setvalidUname(true);
      return;
    }
    setvalidPass(true);
    try {
      const result = await execute({
        variables: { name, email, password, username },
      });
      if (result.errors) return;

      await setAuthData({
        loading: false,
        token: result.data.createUser.token,
        user: result.data.createUser.user,
      });

      history.push("/");
    } catch (err) {
      seterror(err);
      if (err.message === "Email Already exists please login!") {
        setvalidEmail(false);
        setvalidUname(true);
      }
      if (err.message === "Username Already exists please try another one!") {
        setvalidUname(false);
        setvalidEmail(true);
      }
    }
  };

  const errorIcon = (
    <InputAdornment>
      <HighlightOff style={{ color: "red", height: 30, width: 30 }} />
    </InputAdornment>
  );

  const validIcon = (
    <InputAdornment>
      <CheckCircleOutline style={{ color: "#ccc", height: 30, width: 30 }} />
    </InputAdornment>
  );

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
            <form onSubmit={handleSignupOperation}>
              <div>
                <Input
                  name="email"
                  className={classes.textField}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Mobile Number or Email"
                  size="small"
                  fullWidth
                  type="email"
                  variant="outlined"
                  required
                  InputProps={{
                    endAdornment: !validEmail ? errorIcon : validIcon,
                  }}
                />
              </div>
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  size="small"
                  fullWidth
                  type="text"
                  variant="outlined"
                  required
                  className={classes.textField}
                  InputProps={{
                    endAdornment: !validName ? errorIcon : validIcon,
                  }}
                />
              </div>
              <div>
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="User Name"
                  size="small"
                  fullWidth
                  type="text"
                  required
                  variant="outlined"
                  className={classes.textField}
                  InputProps={{
                    endAdornment: !validUname ? errorIcon : validIcon,
                  }}
                />
              </div>
              <div>
                <Input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  size="small"
                  fullWidth
                  required
                  type="password"
                  variant="outlined"
                  className={classes.textField}
                  InputProps={{
                    endAdornment: !validPass ? errorIcon : validIcon,
                  }}
                />
              </div>
              <div>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  fullWidth
                  disabled={loading ? true : false}
                  type="submit"
                  className={classes.submitButton}
                >
                  {loading ? <LoadingIcon /> : "Sign up"}
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
            {error && (
              <Typography style={{ color: "red" }} variant="body2">
                {error.message}
              </Typography>
            )}
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
