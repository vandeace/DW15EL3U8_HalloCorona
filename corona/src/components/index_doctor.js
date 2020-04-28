import React, { Component } from 'react';
import { connect } from 'react-redux';
import Consult from './consult_item';
import * as actConsult from '../_actions/consult';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/transaction_item.css';
import '../style/transaction.css';

class index_doctor extends Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials'));
    this.props.dispatch(actConsult.getConsult(data.token));
  }

  render() {
    const datas = this.props.order;
    console.log(datas);
    const consultation = datas.data.map((item, index) => (
      <Consult item={item} key={index} />
    ));
    return (
      <div>
        <div>
          <div className='transaction-bg'>
            <h3 className='transaction-title'>Reservasi Data</h3>
            <div className='transaction-area'>
              <Container fluid className='transaction-item-area'>
                <Row>
                  <Col xs={2} className='transaction-text'>
                    No
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Patient
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Subject
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Date Of Complaint
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Status
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Action
                  </Col>
                </Row>
                <p className='transaction-item-line' />
              </Container>
              {consultation}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

export default connect(mapStateToProps)(index_doctor);
