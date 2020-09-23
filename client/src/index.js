import React from "react";
import ReactDOM from "react-dom";
import theme from "./helpers/theme";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import FeedPage from "./pages/feed";
import ExplorePage from "./pages/explore";
import SingupPage from "./pages/signup";
import LoginPage from "./pages/login";
import PostPage from "./pages/post";
import NotFoundPage from "./pages/404";

const Root = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route exact path="/explore" component={ExplorePage} />
            <Route exact path="/p/:postId" component={PostPage} />
            <Route exact path="/accounts/emailsignup" component={SingupPage} />
            <Route exact path="/accounts/login" component={LoginPage} />
            <Route exact path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
