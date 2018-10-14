import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import PostsContainer from "./PostsContainer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header tagline="Cos working is over-rated" headerClass="subheading" />
        <PostsContainer />
      </div>
    );
  }
}

export default Home;
