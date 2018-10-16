import React, { Component } from "react";
import { Router, Route } from 'react-router-dom';
import history from './history';
import "./css/clean-blog.css";
import "./css/application.css";
import Home from "./components/Home";
import Post from "./components/Post";

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/posts/:slug" component={Post} />
        </div>
      </Router>
    );
  }
}

export default App;
