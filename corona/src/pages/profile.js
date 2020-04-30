import React, { Component } from 'react';
import Login from '../components/login';
import Data from '../components/profile';
import { Redirect } from 'react-router-dom';

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
