import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="container my-3">
        <div className="card" >
          <div style={{display:'flex',position:'absolute',justifyContent:'flex-end',right:'0'}} >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          
          <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2025/02/Saronic_Port_Alpha.jpg?resize=1200,600" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}... </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
