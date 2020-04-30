import React, { Component } from 'react';
import Header from '../components/login';
import Data from '../components/article';
import Jumbo from '../components/jumbotron';

export default class home_user extends Component {
  render() {
    return (
      <>
        <Header />
        <Jumbo />
        <div
          className='container-fluid margin-top pb-5 mainhead'
          style={{ width: '80%' }}
        >
          <div className='text-center mb-5'>
            <h2>Artikel Hari Ini</h2>
          </div>
          <Data />
        </div>
      </>
    );
  }
}
