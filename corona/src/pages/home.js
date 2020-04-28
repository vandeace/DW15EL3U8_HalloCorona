import React, { Component } from 'react';
import { connect } from 'react-redux';
import DoctorIndex from './home_doctor';
import User from './home_user';

class Home extends Component {
  render() {
    const status = this.props.users.data.status;
    console.log(status);
    if (status === 'doctor') {
      return <DoctorIndex />;
    } else {
      return <User />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps)(Home);
