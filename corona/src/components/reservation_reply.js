import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actReply from '../_actions/reply';

class reservation_reply extends Component {
  componentDidMount() {
    const token = JSON.parse(localStorage.getItem('credentials'));
    this.props.dispatch(actReply.getReply(token.token));
  }
  render() {
    const datas = this.props.reply;
    const id = this.props.item;
    const data = datas.data.filter((value) => value.consultationId === id - 0);

    return (
      <div>
        {data &&
          data.map((item, index) => (
            <div className='mr-3'>
              <div className='row mt-lg-3'>
                <div className='col-3'></div>
                <div className='col-1'>
                  <img
                    src={process.env.PUBLIC_URL + `../pic/doctor.png`}
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
                <div className='mr-3 mt-1'>
                  <h5>{item.reply}</h5>
                </div>
              </div>
            </div>
          ))}
        {data && data.length === 0 && <h4>Waiting Reply</h4>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reply: state.reply,
  };
};

export default connect(mapStateToProps)(reservation_reply);
