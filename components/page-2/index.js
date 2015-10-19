import React from 'react';
import Router from 'react-router';

let Link = Router.Link;

let Home = React.createClass({

  render () {
    return (
      <div>
        <h1>Page 2</h1>
        <Link to="home">Home</Link>
      </div>
    );
  }
});

export default Home;