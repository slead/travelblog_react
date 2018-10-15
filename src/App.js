import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./css/clean-blog.css";
import "./css/application.css";
import Home from "./components/Home";
import PostContainer from "./components/PostContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:postId" component={PostContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
