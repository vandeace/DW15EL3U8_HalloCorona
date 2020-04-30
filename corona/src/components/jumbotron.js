import React, { Component } from 'react';
import axios from 'axios';
import { Jumbotron, Form, Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export default class jumbotron extends Component {
  state = {
    auth: false,
    signIn: false,
    redir: false,
  };

  componentDidMount() {
    const user = localStorage.getItem('auth');
    if (user) {
      this.setState({ auth: JSON.parse(user) });
    }
  }

  handleChangeTxt = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      this.setState({ signIn: false });
      this.setState({ redir: true });
    } catch (error) {
      console.log(error);
    }
  };

  handleClick = () => {
    if (this.state.auth) {
      this.setState({ redir: true });
    } else {
      this.setState({ signIn: true });
    }
  };

  closeSignIn = () => {
    this.setState({ signIn: false });
  };

  render() {
    if (this.state.redir) return <Redirect to='/form' />;

    return (
      <div>
        <Jumbotron>
          <div className='container py-3 d-flex align-items-top justify-content-between'>
            <div className='container-fluid' style={{ width: '50%' }}>
              <div className='d-flex align-items-top'>
                <div className='row'>
                  <img
                    src={process.env.PUBLIC_URL + '/logos/covid.png'}
                    className='covid'
                    alt='...'
                    style={{
                      marginTop: 50,
                      marginLeft: 100,
                      width: '20%',
                    }}
                  />

                  <h1 className='text-white ml-5'>Cegah Covid-19</h1>
                  <h2 className='text-white ml-5'>dengan melakukan</h2>
                </div>
              </div>
              <p className='mt-3' style={{ marginLeft: 0 }}>
                <button
                  onClick={this.handleClick}
                  className='btn btn-light ml-5 mt-3'
                  style={{ color: '#ff6185' }}
                >
                  <img
                    style={{ height: 40 }}
                    className='mr-3'
                    alt='..'
                    src={process.env.PUBLIC_URL + '/logos/button.png'}
                  />
                  Konsultasi Dengan Dokter
                </button>
              </p>
            </div>

            <div className='container-fluid' style={{ width: '50%' }}>
              <div className='d-flex' style={{ maxWidth: '620px' }}>
                <div className='text-center'>
                  <img
                    src={process.env.PUBLIC_URL + '/logos/Crowd.png'}
                    alt=''
                  />
                </div>

                <div className='text-center mr-3'>
                  <img
                    src={process.env.PUBLIC_URL + '/logos/Hand.png'}
                    alt=''
                  />
                </div>

                <div className='text-center'>
                  <img
                    src={process.env.PUBLIC_URL + '/logos/Eyes.png'}
                    alt=''
                  />
                </div>

                <div className='text-center'>
                  <img
                    src={process.env.PUBLIC_URL + '/logos/House.png'}
                    alt=''
                  />
                </div>
              </div>
            </div>
            {/* //batas */}
          </div>
        </Jumbotron>

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
        {/* /// */}
      </div>
    );
  }
}
