import React from "react";
import axios from "axios";
import SanitizedHTML from "react-sanitized-html";
import Header from "./Header";
import Thumbnail from "./Thumbnail";

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
      .get("https://guarded-river-82725.herokuapp.com/posts/" + this.state.slug + ".json")
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
      <div className="container">
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
               <div className="row">
                {this.state.post.photos.map(photo => {
                  return <Thumbnail photo={photo} key={photo.id} size="large"/>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
