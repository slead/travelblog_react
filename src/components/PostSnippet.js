import React from "react";
import SanitizedHTML from "react-sanitized-html";
import Thumbnail from "./Thumbnail";

class Postsnippet extends React.Component {
  setLink = url => {
    return "/posts/" + url;
  };

  render() {
    return (
      <div>
        <div className="row top-50">
          <div className="col-md-12 mx-auto">
            <div className="post-preview">
              <h2 className="post-title">
                <a href={this.setLink(this.props.post.slug)}>
                  {this.props.post.title}
                </a>
              </h2>
              <SanitizedHTML
                className="post-subtitle"
                allowedAttributes={{ a: ["href"] }}
                allowedTags={["a"]}
                html={this.props.post.content}
              />
              <div className="row">
                {this.props.post.photos.map(photo => {
                  return <Thumbnail photo={photo} key={photo.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Postsnippet;
