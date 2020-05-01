import React, { Component } from 'react';
import '../style/transaction_item.css';
import axios from 'axios';
import Moment from 'react-moment';
import { Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';

export default class consult_item extends Component {
  state = {
    modal: false,
    reply: '',
  };

  showModal = () => {
    this.setState({ modal: true });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  handleChangeTxt = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReply = async () => {
    try {
      const data = JSON.parse(localStorage.getItem('credentials'));
      const id = this.props.item.id;
      const user = await axios({
        method: 'POST',
        data: { reply: this.state.reply },
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${data.token}`,
        },
        url: `http://localhost:5000/api/v1/consultation/${id}/reply`,
      });
      console.log(user);
      if (user) {
        window.location.reload(false);
        this.setState({ modal: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleCancel = async () => {
    try {
      const data = JSON.parse(localStorage.getItem('credentials'));
      const id = this.props.item.id;
      const user = await axios({
        method: 'PATCH',
        data: { status: 'Cancel' },
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${data.token}`,
        },
        url: `http://localhost:5000/api/v1/consultation/${id}`,
      });
      console.log(user);
      if (user) {
        window.location.reload(false);
        this.setState({ modal: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const data = this.props.item;
    return (
      <div>
        <Row>
          <Col xs={1} className='transaction-item-text'>
            {data.id}
          </Col>
          <Col xs={2} className='transaction-item-text'>
            <div style={{ textTransform: 'capitalize' }}>{data.fullName}</div>
          </Col>
          <Col xs={2} className='transaction-item-text'>
            <div style={{ textTransform: 'capitalize' }}>{data.subject}</div>
          </Col>
          <Col xs={2} className='transaction-item-text'>
            <Moment format='YYYY-MM-DD'>{data.createdAt}</Moment>
          </Col>
          {data.status === 'Waiting Approve Consultation Live' && (
            <Col xs={3} className='transaction-item-text color-orange'>
              {data.status}
            </Col>
          )}
          {data.status === 'Waiting Live Consultation' && (
            <Col xs={3} className='transaction-item-text color-green'>
              {data.status}
            </Col>
          )}
          {data.status === 'Cancel' && (
            <Col xs={3} className='transaction-item-text color-red'>
              {data.status}
            </Col>
          )}
          <Col xs={2} className='transaction-item-text'>
            <img
              src={process.env.PUBLIC_URL + `../pic/search.png`}
              alt=''
              onClick={this.showModal}
            ></img>
          </Col>
        </Row>
        <p className='transaction-item-line' />

        <Modal
          size='xl'
          show={this.state.modal}
          onHide={this.closeModal}
          aria-labelledby='example-modal-sizes-title-xl'
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Row style={{}}>
              <Col xs={3}>
                <h3 style={{ textTransform: 'capitalize' }}>{data.subject}</h3>
                <p>{data.description}</p>
              </Col>
              <Col xs={5}></Col>
              <Col xs={4}>
                <h5 style={{ marginTop: '30px' }}>
                  Date Complaint :{' '}
                  <Moment format='DD,MMM YYYY'>{data.createdAt}</Moment>
                </h5>
                <br />
                <h5 style={{ marginTop: '30px' }}>
                  Live Consult :{data.liveConsult}
                </h5>
              </Col>
            </Row>

            <Row style={{ border: '1px solid black' }}>
              <Col xs={1}>
                <h4>No</h4>
              </Col>
              <Col xs={3}>
                <h4>FullName</h4>
              </Col>
              <Col xs={2}>
                <h4>Gender</h4>
              </Col>
              <Col xs={3}>
                <h4>Phone</h4>
              </Col>
              <Col xs={1}>
                <h4>Age</h4>
              </Col>
              <Col xs={1}>
                <h4>Height</h4>
              </Col>
              <Col xs={1}>
                <h4>Weight</h4>
              </Col>
            </Row>
            <Row
              style={{
                border: '1px solid black',
                borderTop: 'none',
                paddingTop: '10px',
              }}
            >
              <Col xs={1}>
                <h4>{data.id}</h4>
              </Col>
              <Col xs={3}>
                <h4>{data.fullName}</h4>
              </Col>
              <Col xs={2}>
                <h4>{data.gender}</h4>
              </Col>
              <Col xs={3}>
                <h4>{data.phone}</h4>
              </Col>
              <Col xs={1}>
                <h4>{data.age}</h4>
              </Col>
              <Col xs={1}>
                <h4>{data.height}</h4>
              </Col>
              <Col xs={1}>
                <h4>{data.weight}</h4>
              </Col>
            </Row>
            <Row
              style={{
                border: '1px solid',
                paddingTop: '3px',
                borderTop: 'none',
              }}
            >
              {' '}
              <Form.Control
                as='textarea'
                rows='3'
                name='reply'
                onChange={this.handleChangeTxt}
                value={this.state.reply}
              />
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col xs={4}>
                <Button
                  variant='danger'
                  onClick={this.handleCancel}
                  style={{ marginRight: 50 }}
                >
                  CANCEL
                </Button>
              </Col>
              <Col xs={8}>
                <Button variant='success' onClick={this.handleReply}>
                  APPROVE
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
