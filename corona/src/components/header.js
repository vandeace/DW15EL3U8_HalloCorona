import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Form,
  Container,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap';

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
      <Container>
        <Navbar className='justify-content-between'>
          <Nav>
            <Button variant='white' onClick={this.showSignIn} size='lg'>
              Sign In
            </Button>
            <Button variant='dark' onClick={this.showSignUp} size='lg'>
              Sign Up
            </Button>
          </Nav>
        </Navbar>

        <Modal
          size='lg'
          centered
          show={this.state.signIn}
          onHide={this.closeSignIn}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <h1 style={{ textAlign: 'center' }}>SIGN IN</h1>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
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
              <Form.Group controlId='formBasicCheckbox'>
                <Form.Text className='text-muted'>
                  Dont have an account? Click Here
                </Form.Text>
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant='primary'
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
      </Container>
    );
  }
}
