import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Redirect } from 'react-router-dom';
import * as actConsult from '../_actions/consult';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false,
      success: false,
    };
  }

  liveConsult = (date) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, liveConsult: date },
    });
  };

  bornDate = (date) => {
    const { data } = this.state;
    this.setState({
      data: { ...data, bornDate: date },
    });
  };

  handleSelect = (e) => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value },
    });
  };

  handleChange = (e) => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value },
    });
  };

  handleSubmit = async () => {
    const datas = JSON.parse(localStorage.getItem('credentials'));
    const data = this.state.data;
    await this.props.dispatch(actConsult.postConsult(datas.token, data));
    await this.props.dispatch(actConsult.getConsult(datas.token));
    this.setState({
      data: '',
      success: true,
    });
  };

  render() {
    const { data } = this.state;

    const { data: consul, loading } = this.props.consul;

    if (loading) return <h1>Loading</h1>;
    if (this.state.success) return <Redirect to='/reservation' />;

    return (
      <>
        <div className='container margin-top pb-5' style={{ marginTop: 100 }}>
          <div className='row'>
            <div className='col'>
              <div className='card'>
                <div className='card-body'>
                  <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                      <label htmlFor='name' className='form-control-label bold'>
                        Full Name
                      </label>
                      <input
                        required
                        autoComplete='off'
                        onChange={this.handleChange}
                        value={data.fullName || ''}
                        name='fullName'
                        className='forms'
                        type='text'
                        id='name'
                      />
                    </div>

                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label
                            htmlFor='phone'
                            className='form-control-label bold'
                          >
                            Phone
                          </label>
                          <input
                            required
                            autoComplete='off'
                            onChange={this.handleChange}
                            value={data.phone || ''}
                            name='phone'
                            className='forms'
                            type='phone'
                            id='phone'
                          />
                        </div>
                      </div>

                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label className='bold'>Born Date</label>
                          <DatePicker
                            dateFormat='d MMMM, yyyy'
                            className='date-box w-100'
                            selected={data.bornDate}
                            onChange={this.bornDate}
                            name='bornDate'
                          />
                        </div>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='col-lg-3'>
                        <div className='form-group'>
                          <label
                            htmlFor='age'
                            className='form-control-label bold'
                          >
                            Age
                          </label>
                          <input
                            required
                            autoComplete='off'
                            onChange={this.handleChange}
                            value={data.age || ''}
                            name='age'
                            className='weight'
                            type='number'
                            id='age'
                          />
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <div className='form-group'>
                          <label
                            htmlFor='height'
                            className='form-control-label bold'
                          >
                            Height
                          </label>
                          <input
                            required
                            autoComplete='off'
                            onChange={this.handleChange}
                            value={data.height || ''}
                            name='height'
                            className='weight'
                            type='number'
                            id='height'
                          />
                        </div>
                      </div>
                      <div className='col-lg-3'>
                        <div className='form-group'>
                          <label
                            htmlFor='weight'
                            className='form-control-label bold'
                          >
                            Weight
                          </label>
                          <input
                            required
                            autoComplete='off'
                            onChange={this.handleChange}
                            value={data.weight || ''}
                            name='weight'
                            className='weight'
                            type='number'
                            id='weight'
                          />
                        </div>
                      </div>

                      <div className='col-lg-3'>
                        <div className='form-group'>
                          <label
                            htmlFor='gender'
                            className='form-control-label bold'
                          >
                            Gender
                          </label>
                          <select
                            onChange={this.handleChange}
                            defaultValue={'select'}
                            name='gender'
                            className='forms'
                            id='gender'
                          >
                            <option value='select' disabled>
                              Select Gender
                            </option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                          </select>
                        </div>
                      </div>

                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label className='bold' htmlFor='subject'>
                            Subject
                          </label>
                          <input
                            required
                            autoComplete='off'
                            onChange={this.handleChange}
                            value={data.subject || ''}
                            name='subject'
                            className='forms'
                            type='text'
                            id='subject'
                          />
                        </div>
                      </div>

                      <div className='col-lg-6'>
                        <div className='form-group'>
                          <label className='bold'>Live Consultation Date</label>
                          <DatePicker
                            dateFormat='d MMMM, yyyy'
                            className='date-box w-100'
                            selected={data.liveConsult}
                            onChange={this.liveConsult}
                            minDate={new Date()}
                            name='liveConsult'
                          />
                        </div>
                      </div>

                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <label
                            htmlFor='description'
                            className='form-control-label bold'
                          >
                            Description
                          </label>
                          <textarea
                            required
                            autoComplete='off'
                            onChange={this.handleChange}
                            value={data.description || ''}
                            name='description'
                            id='description'
                            className='textareas'
                          />
                        </div>
                      </div>

                      <div className='col-lg-4'></div>
                      <div className='col-lg-2'>
                        <div className='mt-3 float-right d-flex'>
                          <button
                            type='submit'
                            className='btn btn-primary'
                            disabled={loading}
                          >
                            {loading && <div className='btn-loader'></div>}
                            {!loading && <span>Send</span>}
                          </button>
                        </div>
                      </div>
                      <div className='col-lg-5'></div>
                    </div>
                  </form>
                </div>
              </div>
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

export default connect(mapStateToProps)(Reservation);
