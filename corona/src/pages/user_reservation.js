import React, { Component } from 'react';
import Header from '../components/login';
import Consult from '../components/reservation_data';
import { connect } from 'react-redux';
import * as actConsult from '../_actions/consult';

class user_reservation extends Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials'));
    this.props.dispatch(actConsult.getConsult(data.token));
  }

  render() {
    const { data: consul, loading, error } = this.props.consul;
    console.log(consul);
    const item = consul.map((item, index) => (
      <Consult item={item} key={index} />
    ));

    return (
      <>
        <Header />
        <div className='container margin-top pb-5'>
          <div className='row'>
            <div className='col'>
              <h5>Consultation</h5>
              {item}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    consul: state.consultation,
  };
};

export default connect(mapStateToProps)(user_reservation);
