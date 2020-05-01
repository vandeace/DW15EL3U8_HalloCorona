import React, { Component } from 'react';
import Data from '../components/index_doctor';
import Header from '../components/login';

export default class home_doctor extends Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className='container-fluid margin-top pb-5 mainhead'
          style={{ width: '80%' }}
        >
          <div className='text-center mb-5'>
            <h2>Reservation Data</h2>
          </div>
          <Data />
        </div>
      </div>
    );
  }
}
