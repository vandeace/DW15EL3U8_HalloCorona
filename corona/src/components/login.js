import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actUser from '../_actions/user';
import Header from './header';
import HeaderDoctor from './header_doctor';
import HeaderUser from './header_user';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: null,
      data: [],
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials'));

    const user = localStorage.getItem('auth');
    console.log(this.state.data);
    if (user) {
      this.setState({ isLogin: true });
      this.props.dispatch(actUser.setToken(data.token));
      this.props.dispatch(actUser.getUsers(data.token));
    } else {
      this.setState({ isLogin: false });
    }
  }

  render() {
    const role = this.props.users.data.status;
    if (this.state.isLogin) {
      if (role === 'doctor') {
        return <HeaderDoctor />;
      }
      return <HeaderUser />;
    } else {
      return <Header />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps)(Login);
