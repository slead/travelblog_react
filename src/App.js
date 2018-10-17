import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./css/clean-blog.css";
import "./css/application.css";
import Home from "./components/Home";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:slug" component={Post} />
        </Switch>
      </Router>
    );
  }
}

export default App;
