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
      .get("https://guarded-river-82725.herokuapp.com/posts.json?api=true")
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

  render() {
    return (
      <div className="container">
        <Header
          headline="Steve and Glo's travel blog"
          tagline="Cos working is over-rated"
          headerClass="subheading"
          headerPhoto={this.getHeaderPhoto()}
        />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default Home;
