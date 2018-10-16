import React from "react";
import axios from "axios";
import Header from "./Header";
import PostsContainer from "./PostsContainer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/posts.json?api=true")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => console.log(error));
  }

  getHeaderPhoto = () => {
    try {
      return this.state.posts[0].photos[0].large;
    } catch (error) {
      return "https://farm8.staticflickr.com/7088/7254522762_6cb4f1162c_b.jpg";
    }
  };

  getHeadLine = () => {
    try {
      return this.state.posts[0].title;
    } catch (error) {
      return "Steve and Glo's travel blog";
    }
  };

  getTagline = () => {
    try {
      return this.state.posts[0].title;
    } catch (error) {
      return "Cos working is over-rated";
    }
  };

  render() {
    return (
      <div>
        <Header
          headline={this.getHeadLine()}
          tagline={this.getTagline()}
          headerClass="subheading"
          headerPhoto={this.getHeaderPhoto()}
        />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default Home;
