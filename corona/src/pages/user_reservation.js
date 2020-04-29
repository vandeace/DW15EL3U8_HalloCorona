import React, { Component } from 'react';
import Header from '../components/login';
import Data from '../components/reservation_data';

export default class add_consult extends Component {
  render() {
    return (
      <>
        <Header />
        <div className='container margin-top pb-5'>
          <div className='row'>
            <div className='col'>
              <h5>Consultation</h5>
              <Data />
            </div>
          </div>
        </div>
      </>
    );
  }
}
