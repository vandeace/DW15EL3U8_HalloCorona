import React, { Component } from 'react';
import { Navbar, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class header_user extends Component {
  logout = () => {
    localStorage.getItem('auth');
    localStorage.clear();
    window.location.reload(true);
    // const status = this.props.users.data.status;
    // if (!status) {
    //   return <Redirect to='/' />;
    // }
  };

  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle
            style={{
              background: 'white',
              border: 'white',
              boxShadow: 'none',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + `../logos/login.png`}
              alt=''
            ></img>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='' style={{ paddingRight: '50px' }}>
              <Link to='/profile'>
                <img
                  src={process.env.PUBLIC_URL + `../logos/user.png`}
                  alt=''
                />
                <h1>profile</h1>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='./form'>
                <img
                  src={process.env.PUBLIC_URL + `../logos/consult.png`}
                  alt=''
                />
                <h1>Consultation</h1>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href='' style={{ borderTop: '3px solid grey' }}>
              <span onClick={this.logout}>
                <img
                  src={process.env.PUBLIC_URL + `../logos/logout.png`}
                  alt=''
                />
                <h1>Logout</h1>
              </span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps)(header_user);
