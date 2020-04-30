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
    const { data: article, loading, error } = this.props.article;
    // const data = article.data.map((item, index) => (
    // <Link
    //   to={`/article/${item.id}`}
    //   style={{ textDecoration: 'none', color: 'black' }}
    //   key={index}
    // >
    //   <Show item={item} key={index} />
    // </Link>
    // ));
    return (
      <>
        <div className='margin-top pb-5 container-fluid'>
          <div className='row'>
            {article &&
              article.length > 0 &&
              article.map((blog, index) => (
                <div key={index} className='col-lg-3 col-md-6 '>
                  <Link to={`/article/${blog.id}`}>
                    <div
                      className='card mb-4 '
                      style={{
                        height: 400,
                        width: 330,
                      }}
                    >
                      <img
                        className='card-img-top'
                        src={
                          process.env.PUBLIC_URL + `/pictures/${blog.id}.png`
                        }
                        alt='...'
                      />

                      <div className='card-body p-3'>
                        <h5 className='card-title ellipsis-title'>
                          {blog.title}
                        </h5>
                        <div className='card-body p-2' style={{ height: 100 }}>
                          <small className='card-title ellipsis-desc'>
                            {blog.description}
                          </small>
                        </div>
                      </div>
                      {/* ///batas bawah card */}
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
        {/* <Row>
          <Container fluid className='content-bg'>
            <div className='flex-container'>{data}</div>
          </Container>
        </Row> */}
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
