import React from "react";
import ReactDOM from "react-dom";
import theme from "./helpers/theme";
import FeedPage from "./pages/feed";
import PostPage from "./pages/post";
import EditPage from "./pages/edit";
import NotFoundPage from "./pages/404";
import LoginPage from "./pages/login";
import SingupPage from "./pages/signup";
import ExplorePage from "./pages/explore";
import ProfilePage from "./pages/profile";
import PrivateRoute from "./components/general/PrivateRoute";
import UnauthRoute from "./components/general/UnauthRoute";
import AuthProvider from "./components/general/AuthContext";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql/client";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Root = () => {
  return (
    <React.Fragment>
      <AuthProvider>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Switch>
                <Route exact path="/404" component={NotFoundPage} />
                <PrivateRoute exact path="/" component={FeedPage} />

                <PrivateRoute exact path="/explore" component={ExplorePage} />
                <PrivateRoute exact path="/p/:postId" component={PostPage} />
                <PrivateRoute exact path="/:me" component={ProfilePage} />
                <PrivateRoute
                  exact
                  path="/accounts/edit"
                  component={EditPage}
                />
                <PrivateRoute
                  exact
                  path="/accounts/reset"
                  component={EditPage}
                />
                <UnauthRoute
                  exact
                  path="/accounts/emailsignup"
                  component={SingupPage}
                />
                <UnauthRoute
                  exact
                  path="/accounts/login"
                  component={LoginPage}
                />
                <Redirect to="/404" />
              </Switch>
            </ThemeProvider>
          </BrowserRouter>
        </ApolloProvider>
      </AuthProvider>
    </React.Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
