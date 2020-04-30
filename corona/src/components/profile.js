import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actUser from '../_actions/user';

class Profile extends Component {
  state = {
    modal: false,
  };

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials')) || '';
    this.props.dispatch(actUser.getUsers(data.token));
  }

  showModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const profile = this.props.users.data;
    console.log(profile);
    return (
      <div>
        <div
          style={{
            margin: 'auto',
            marginTop: '30px',
            width: '40%',
            height: '600px',

            padding: '10px',
            display: 'grid',
            gridTemplateColumns: '60% 40%',
          }}
        >
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ marginLeft: '25px' }}>Personal Info</h2>
            <Container fluid>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/user.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>{profile.fullName}</Row>
                  <Row style={{ fontSize: 'Small' }}>Fullname</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/email.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>{profile.email}</Row>
                  <Row style={{ fontSize: 'Small' }}>Email</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/password.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>
                    <label onClick={this.showModal}>Change Password</label>
                  </Row>
                  <Row style={{ fontSize: 'Small' }}>Password</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/status.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>{profile.status}</Row>
                  <Row style={{ fontSize: 'Small' }}>Status</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/gender.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>{profile.gender}</Row>
                  <Row style={{ fontSize: 'Small' }}>Gender</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/telp.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>08123456789</Row>
                  <Row style={{ fontSize: 'Small' }}>No Telp</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img
                    src={process.env.PUBLIC_URL + `../pic/address.png`}
                    alt=''
                  ></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>{profile.address}</Row>
                  <Row style={{ fontSize: 'Small' }}>Address</Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + `../pic/profile.png`}
              alt=''
              style={{
                width: '280px',
                height: '345px',
                marginTop: '30px',
              }}
            ></img>
            <br />
            <Button
              variant='primary'
              style={{ marginTop: '10px', marginLeft: '60px' }}
            >
              Change Photo Profile
            </Button>
          </div>
        </div>
        <Modal show={this.state.modal} onHide={this.closeModal}>
          <Modal.Header closeButton>CHANGE PASSWORD</Modal.Header>
          <Modal.Body>
            <Form.Group controlId='oldPassword'>
              <Form.Label>Old Password</Form.Label>
              <Form.Control type='password' placeholder='Input Old Password' />
            </Form.Group>
            <Form.Group controlId='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control type='password' placeholder='Input New Password' />
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm New Password'
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant='primary'
                style={{ marginLeft: '150px' }}
                onClick={this.closeModal}
              >
                SAVE CHANGES
              </Button>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
