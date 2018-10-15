import React from "react";
import Header from "./Header";
import SanitizedHTML from "react-sanitized-html";
import urlParse from 'url-parse'

class Post extends React.Component {

  getSlug = url => {
    const parsed = urlParse(url, true);
    return (parsed['pathname'].replace(".json", ""))
  }

  render() {
    return (
      <div>
        <div className="row top-50">
          <div className="col-md-12 mx-auto">
            <div className="post-preview">
              <h2 className="post-title">
                <a href={this.getSlug(this.props.post.url)}>{this.props.post.title}</a>
              </h2>
              <SanitizedHTML className="post-subtitle"
                allowedAttributes={{ a: ["href"] }}
                allowedTags={["a"]}
                html={this.props.post.content}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
