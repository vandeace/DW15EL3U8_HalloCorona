import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actArticle from '../_actions/article';
import { Redirect } from 'react-router-dom';

class add_article extends Component {
  state = {
    data: {},
    success: false,
  };

  handleChangeTxt = (e) => {
    const { data } = this.state;
    const value = e.target.value;
    this.setState({
      data: { ...data, [e.target.name]: value },
    });
  };

  handleSubmit = () => {
    const datas = JSON.parse(localStorage.getItem('credentials'));
    const title = this.state.data.title;
    const description = this.state.data.description;

    const data = {
      title: title,
      description: description,
    };

    this.props.dispatch(actArticle.postArticles(datas.token, data));

    this.setState({
      data: '',
      success: true,
    });
  };

  render() {
    const { data } = this.state;
    const { data: art, loading, error } = this.props;

    if (this.state.success) return <Redirect to='/' />;
    return (
      <>
        <div className='container margin-top pb-5'>
          <div className='card p-4'>
            <div className='form-group'>
              <label className='form-control-label bold'>Title</label>
              <input
                required
                autoComplete='off'
                onChange={this.handleChangeTxt}
                value={data.title || ''}
                name='title'
                className='title'
                type='text'
                id='title'
              />
              <div className='form-group'>
                <label className='form-control-label bold'>Article</label>
                <textarea
                  required
                  autoComplete='off'
                  onChange={this.handleChangeTxt}
                  value={data.description || ''}
                  name='description'
                  className='forms'
                  type='text'
                  rows='40'
                />
              </div>
            </div>
          </div>
          <div className='mt-3 text-center'>
            <button className='btn-apply' onClick={this.handleSubmit}>
              {loading && <div className='btn-loader'></div>}
              {!loading && <span>Post</span>}
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    art: state.article,
  };
};

export default connect(mapStateToProps)(add_article);
