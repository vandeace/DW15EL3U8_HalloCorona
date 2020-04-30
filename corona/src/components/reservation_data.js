import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actConsult from '../_actions/consult';
import Moment from 'react-moment';
import Reply from './reservation_reply';

class reservation_data extends Component {
  render() {
    const data = this.props.item;
    return (
      <>
        <div className='card p-3 mb-3'>
          <div className='d-flex align-items-top mb-3'>
            <div className='mr-3'>
              <img
                src={process.env.PUBLIC_URL + `../pic/profile.png`}
                alt=''
                className='avatar'
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 45,
                  border: '3px solid #ff6185',
                }}
              />
            </div>

            <div className='d-flex w-100 justify-content-between align-content-top'>
              <div>
                <h5 className='mb-0'>{data.subject}</h5>
                <small>
                  <Moment format='DD,MMM YYYY'>{data.createdAt}</Moment>
                </small>
                <br />
                <small>{data.description}</small>
              </div>
              <div>
                <small className='bold'>
                  <Moment format='DD,MMM YYYY'>{data.createdAt}</Moment>
                </small>
              </div>
            </div>
          </div>
          <div className='border-top'>
            <div className='text-center mt-3'>
              <Reply item={data.id || ''} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    consul: state.consultation,
  };
};

export default connect(mapStateToProps)(reservation_data);
