import React from "react";

class Thumbnail extends React.Component {
  getSrc = (photo) => {
    const size = this.props.size
    console.log(size)
    return this.props.photo[size]
  }
  render() {
    return (
      <div className="col-lg-4 mx-auto">
        <img
          alt={this.props.photo.title}
          className="lightbox-thumb mx-auto d-block image"
          src={this.getSrc(this.props.photo)}
        />
      </div>
    );
  }
}

export default Thumbnail;
