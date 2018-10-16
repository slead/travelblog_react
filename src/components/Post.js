import React from "react";
import axios from "axios";
import Header from "./Header";
import SanitizedHTML from "react-sanitized-html";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      post: {
        title: null,
        content: null,
        photos: []
      }
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3001/posts/" + this.state.slug + ".json")
      .then(response => {
        this.setState({ post: response.data });
      })
      .catch(error => console.log(error));
  }
  getHeaderPhoto = () => {
    try {
      return this.state.post.photos[0].large;
    } catch (error) {
      console.log(error)
      return "https://farm8.staticflickr.com/7088/7254522762_6cb4f1162c_b.jpg";
    }
  };

  render() {
    return (
      <div>
        <div className="row top-50">
          <div className="col-md-12 mx-auto">
            <div className="post-preview">
              <Header
                headline={this.state.post.title}
                headerClass="subheading"
                tagline={this.state.post.title}
                headerClass="subheading"
                headerPhoto={this.getHeaderPhoto()}
              />
              <h2 className="post-title">{this.state.post.title}</h2>
              <SanitizedHTML
                className="post-subtitle"
                allowedAttributes={{ a: ["href"] }}
                allowedTags={["a"]}
                html={this.state.post.content}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
