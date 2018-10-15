import React from "react";
import PropTypes from "prop-types";

const Header = props => (
  <header className="masthead d-none d-md-block">
    <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-md-10 mx-auto'>
          <div className='site-heading'>
            <h1>{props.headline}</h1>
            <span className={props.headerClass}>{props.tagline}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  headline: PropTypes.string,
  tagline: PropTypes.string,
  headerClass: PropTypes.string
}

export default Header;
