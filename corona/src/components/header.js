import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Button, Modal } from 'react-bootstrap';

export default class header extends Component {
  state = {
    signIn: false,
    signUp: false,
    username: '',
    password: '',
    userData: null,
  };

  componentDidMount() {
    this.handleCheckLogin();
  }
  handleChangeTxt = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheckLogin = () => {
    const user = localStorage.getItem('auth');
    if (user) {
      this.setState({ userData: JSON.parse(user) });
    }
  };

  showSignIn = () => {
    this.setState({ signIn: true });
  };

  closeSignIn = () => {
    this.setState({ signIn: false });
  };

  showSignUp = () => {
    this.setState({ signUp: true });
  };

  closeSignUp = () => {
    this.setState({ signUp: false });
  };

  handleLogin = async () => {
    try {
      const user = await axios.post('http://localhost:5000/api/v1/login', {
        username: this.state.username,
        password: this.state.password,
      });
      const { data } = user.data;
      localStorage.setItem('credentials', JSON.stringify(data));
      localStorage.setItem('auth', 'true');
      console.log(data.status);
      window.location.reload(false);
      this.setState({ signIn: false });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Navbar>
          <div className='col-lg-2'>
            <Link to='/'>
              <img
                style={{ height: '55px' }}
                src={process.env.PUBLIC_URL + '/logos/home.svg'}
              />
            </Link>
          </div>

          <div className='col-lg-8'></div>
          <div className='col-lg-2'>
            <div className='d-flex'>
              <button
                className='btn-sign btn btn-signin mr-3 font-weight-bold'
                onClick={this.showSignIn}
              >
                Sign In
              </button>
              <button
                className='btn-signup btn btn-signup btn-light font-weight-bold'
                onClick={this.showSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </Navbar>

        <Modal
          size='md'
          centered
          show={this.state.signIn}
          onHide={this.closeSignIn}
          className='custom-map-modal modal-x'
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <h1 style={{ textAlign: 'center', color: '#ff6185' }}>LOGIN</h1>
              <Form.Group>
                <Form.Label className='bold'>Username</Form.Label>
                <Form.Control
                  name='username'
                  type='text'
                  placeholder='Enter Username'
                  onChange={this.handleChangeTxt}
                  value={this.state.username}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChangeTxt}
                  value={this.state.password}
                />
              </Form.Group>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  className='btn-sign btn btn-signin font-weight-bold'
                  style={{ display: 'flex', justifyContent: 'center' }}
                  onClick={this.handleLogin}
                >
                  SIGN IN
                </Button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <p
              onClick={() => {
                this.closeSignIn();
                this.showSignUp();
              }}
            >
              Don't have an account? <b>Click Here!</b>
            </p>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
