import React from "react";
import axios from "axios";
import Post from "./Post";

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/posts.json")
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.state.posts.map(post => {
              return (
                <Post
                  post={post}
                  key={post.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default PostsContainer;