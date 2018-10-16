import React from "react";
import Header from "./Header";
import PostsContainer from "./PostsContainer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header headline="Steve and Glo's travel blog" tagline="Cos working is over-rated" headerClass="subheading" />
        <PostsContainer />
      </div>
    );
  }
}

export default Home;
