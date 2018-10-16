import React from "react";

import PostSnippet from "./PostSnippet";

class PostsContainer extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {this.props.posts.map(post => {
              return (
                <PostSnippet
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
