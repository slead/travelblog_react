import React from "react";
import axios from "axios";
import Post from "./Post";
import Header from "./Header";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/posts.json")
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header tagline="Individual Post" headerClass="subheading" />
            {/*<Post
              post={this.state.post}
              key={this.state.post.id}
            />*/}

          </div>
        </div>
      </div>
    );
  }
}

export default PostContainer;
