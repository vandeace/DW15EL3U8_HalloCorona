import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actArticle from '../_actions/article';
import Show from './article_item';
import { Container, Row } from 'react-bootstrap';
import '../style/show.css';

class Article extends Component {
  componentDidMount() {
    this.props.dispatch(actArticle.getArticles());
  }

  render() {
    const article = this.props.article;
    const data = article.data.map((item, index) => (
      <Link
        to={`/article/${item.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
        key={index}
      >
        <Show item={item} key={index} />
      </Link>
    ));
    return (
      <>
        <Row>
          <h1 className='header'>Article Hari Ini</h1>
        </Row>
        <Row>
          <Container fluid className='content-bg'>
            <div className='flex-container'>{data}</div>
          </Container>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
  };
};

export default connect(mapStateToProps)(Article);
