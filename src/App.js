import React, { Component } from "react";
import "./css/clean-blog.css";
import "./css/application.css";
import Header from "./components/Header";
import PostsContainer from "./components/PostsContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header tagline="Cos working is over-rated" headerClass="subheading" />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
