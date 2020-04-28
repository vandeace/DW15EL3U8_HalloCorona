import React, { Component } from 'react';
import '../style/content.css';

export default class article_item extends Component {
  render() {
    const article = this.props.item;
    return (
      <div className='content-item'>
        <img
          className='content-image'
          src={process.env.PUBLIC_URL + `../pictures/${article.id}.png`}
          alt='header'
        />
        <p className='content-info-1'>{article.title}</p>
        <p className='content-info-2'>{article.description}</p>
      </div>
    );
  }
}
