import React, { Component } from 'react';
import Header from '../components/login';
import Data from '../components/reservation_form';

export default class add_consult extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
      </div>
    );
  }
}
