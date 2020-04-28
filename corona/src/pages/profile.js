import React, { Component } from 'react';
import Login from '../components/login';
import Data from '../components/profile';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Login />
        <Data />
      </div>
    );
  }
}
