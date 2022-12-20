import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = []

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4e8496338fe34845a5d375324f6cd4d2"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles })
  }

  render() {
    return (
      <div className="container my-4">
        <h2>prrockz Top Headlines</h2>
        <div className="row my-2">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>

      </div>
    )
  }
}

export default News