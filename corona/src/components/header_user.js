import React, { Component } from 'react';
import { Navbar, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class header_user extends Component {
  state = {
    logout: null,
  };

  handleSignOut = () => {
    localStorage.clear();
    this.setState({ logout: true });
  };

  render() {
    if (this.state.logout) {
      window.location.href = '/';
    }
    return (
      <div>
        <Navbar bg='white' expand='lg' className='shadows py-2 px-2'>
          <div className='col-lg-2'>
            <Link to='/'>
              <img
                style={{ height: '55px' }}
                src={process.env.PUBLIC_URL + '/logos/home.svg'}
              />
            </Link>
          </div>

          <div className='col-lg-9'></div>
          <div className='col-lg-1 mr-0'>
            <Dropdown style={{ marginRight: 0, marginLeft: 70 }}>
              <Dropdown.Toggle
                className='nav-link dropdown-toggle p-0 m-0'
                style={{ borderRadius: 50 }}
              >
                <img
                  src={process.env.PUBLIC_URL + `../logos/login.png`}
                  alt=''
                  className='avatar'
                  style={{ height: 50, width: 50, borderRadius: 45 }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu className='dropdown-menu-right mt-3'>
                <Link to='/profile' className='dropdown-item'>
                  <img
                    src={process.env.PUBLIC_URL + `../logos/user.png`}
                    alt=''
                    className='mr-2'
                  />
                  <span style={{}}>Profile</span>
                </Link>

                <Link to='./form' className='dropdown-item'>
                  <img
                    src={process.env.PUBLIC_URL + `../logos/consult.png`}
                    alt=''
                    className='mr-2'
                  />
                  Consultation
                </Link>

                <Link to='./reservation' className='dropdown-item'>
                  <img
                    src={process.env.PUBLIC_URL + `../logos/article.png`}
                    alt=''
                    className='mr-2'
                  />
                  Reservation
                </Link>
                <div className='divider'></div>
                <div
                  className='dropdown-item'
                  onClick={this.handleSignOut}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../logos/logout.png`}
                    alt=''
                    className='mr-2'
                  />
                  Logout
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Navbar>
      </div>
    );
  }
}
