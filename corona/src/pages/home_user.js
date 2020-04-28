import React, { Component } from 'react';
import Header from '../components/login';
import Data from '../components/article';

export default class home_user extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
      </div>
    );
  }
}
