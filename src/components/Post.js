import React from "react";
import PropTypes from "prop-types";

class Post extends React.Component {
  render() {
    return (
      <div className="row top-50">
        <div className="col-md-12 mx-auto">
          <div className="post-preview">
            <h2 className="post-title">{this.props.post.title}</h2>
            <p className="post-subtitle">{this.props.post.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string.isRequired
};

export default Post;
