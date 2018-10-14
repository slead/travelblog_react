import React, { Component } from 'react';
import './css/clean-blog.css';
import './css/application.css';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header tagline="Cos working is over-rated" headerClass="subheading">
          <p>
            posts will go here
          </p>
        </Header>
      </div>
    );
  }
}

export default App;
