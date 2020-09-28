import React from "react";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import OR from "../components/shared/OR";
import Input from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import FacebookBlueIcon from "../images/facebook-icon-blue.svg";
import { Link } from "react-router-dom";
import { useSignupPageStyles } from "../helpers/styles";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/Mutations";
import { authContext } from "../components/general/AuthContext";
import { LoadingIcon } from "../helpers/icons";
import { useHistory } from "react-router-dom";

const Login = () => {
  const classes = useSignupPageStyles();
  const { setAuthData } = React.useContext(authContext);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [execute, { loading }] = useMutation(LOGIN);
  const history = useHistory();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  const handleLoginOperation = async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    const result = await execute({ variables: { email, pass: password } });
    await setAuthData({
      loading: false,
      user: result.data.login.user,
      token: result.data.login.token,
    });
    history.push("/");
  };

  return (
    <React.Fragment>
      <Container maxWidth="xs" className={classes.box}>
        <Card style={{ padding: "20px 40px" }}>
          <div className={classes.cardHeader} />
          <div>
            <form>
              <div>
                <Input
                  name="email"
                  placeholder="Phone Number, User Name or Email"
                  size="small"
                  fullWidth
                  type="text"
                  variant="outlined"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 14, padding: 10 } }}
                  value={formData.email}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <Input
                  name="password"
                  placeholder="Password"
                  size="small"
                  fullWidth
                  type="password"
                  variant="outlined"
                  className={classes.textField}
                  inputProps={{ style: { fontSize: 14, padding: 10 } }}
                  value={formData.password}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  fullWidth
                  onClick={handleLoginOperation}
                  className={classes.submitButton}
                  disabled={loading ? true : false}
                >
                  {loading ? <LoadingIcon /> : "Log in"}
                </Button>
              </div>
            </form>
          </div>
          <OR />
          <div>
            <Button
              startIcon={
                <img
                  className={classes.icon}
                  src={FacebookBlueIcon}
                  alt="facebook"
                />
              }
              color="secondary"
              variant="text"
              style={{ background: "transparent" }}
            >
              Login with Facebook
            </Button>
          </div>
          <Link to="/accounts/reset">Forget Password?</Link>
        </Card>
        <Card className={classes.gutter}>
          <Toolbar className={classes.container}>
            <Typography className={classes.container} variant="body1">
              Don't have an account? &nbsp;
              <Link
                className={classes.navigationLink}
                to="/accounts/emailsignup"
              >
                Sign up
              </Link>
            </Typography>
          </Toolbar>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Login;
