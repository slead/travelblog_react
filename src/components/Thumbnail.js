import React from "react";

class Thumbnail extends React.Component {
  render() {
    return (
      <div className="col-lg-4 mx-auto">
        <img
          alt={this.props.photo.title}
          className="lightbox-thumb mx-auto d-block image"
          src={this.props.photo.small}
        />
      </div>
    );
  }
}

export default Thumbnail;
