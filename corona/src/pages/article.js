import React, { Component } from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import Header from '../components/login';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: false,
      data: {},
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id;
    const article = await axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/article/${id}`,
    });
    this.setState({ data: article.data.data });
    console.log(this.state.data);
    console.log(this.state.data.User);
  }
  render() {
    const data = this.state.data;

    return (
      <div>
        <Header />
        <div
          className='container margin-top pb-5 shadows'
          style={{ marginTop: 70 }}
        >
          <div className='py-3'>
            <h3 className='text-center'>{data.title}</h3>
            <h6>
              <Moment format='DD,MMM YYYY'>{data.createdAt}</Moment>
            </h6>
            <div className='mb-3'>
              <h6 className='d-flex'>
                Author :{' '}
                {data.User ? (
                  <div className='ml-2' style={{ textTransform: 'capitalize' }}>
                    {data.User.username}
                  </div>
                ) : null}
              </h6>
            </div>

            <div className='text-center mb-4'>
              <img
                className='img-fluid'
                alt='..'
                src='https://www.galamedianews.com/media/original/200319194115-psiko.png'
              />
            </div>
            <div>{data.description}</div>
            {/* //batas */}
          </div>
        </div>
        {/* <h1>Article page</h1>
        <h1>{data.title}</h1>
        {data.User ? <h3>Author : {data.User.username}</h3> : null}
        <h3>{data.createdAt}</h3>
        <h3>{data.description}</h3> */}
      </div>
    );
  }
}

export default Article;
