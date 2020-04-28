import React, { Component } from 'react';
import { Navbar, Dropdown, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class header_doctor extends Component {
  logout = () => {
    localStorage.getItem('auth');
    localStorage.clear();
    window.location.reload(true);
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
                <h1>profile</h1>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='./addArticle'>
                <h1>add article</h1>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href='' style={{ borderTop: '3px solid grey' }}>
              <img
                src={process.env.PUBLIC_URL + `../logos/Logout.png`}
                alt=''
                onClick={this.logout}
              ></img>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
