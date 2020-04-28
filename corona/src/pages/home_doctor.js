import React, { Component } from 'react';
import Data from '../components/index_doctor';
import Header from '../components/login';

export default class home_doctor extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
      </div>
    );
  }
}
