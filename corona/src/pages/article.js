import React, { Component } from 'react';
import axios from 'axios';

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
        <h1>Article page</h1>
        <h1>{data.title}</h1>
        {data.User ? <h3>Author : {data.User.username}</h3> : null}
        <h3>{data.createdAt}</h3>
        <h3>{data.description}</h3>
      </div>
    );
  }
}

export default Article;
