import React from "react";

class Header extends React.Component {
  render() {
    const style1 = {
      backgroundImage: 'url("' + this.props.headerPhoto + '")',
    };
    return (
      <header className="masthead d-none d-md-block" style={style1}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{this.props.headline}</h1>
                <span className={this.props.headerClass}>{this.props.tagline}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
