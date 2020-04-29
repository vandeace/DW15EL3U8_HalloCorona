import React, { Component } from 'react';
import Header from '../components/login';
import Data from '../components/add_article';

export default class add_article extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
      </div>
    );
  }
}
