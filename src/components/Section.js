import React from 'react'
import { apiService } from '../services/api.service'

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.query,
      page: this.props.page,
      articles: []
    }
  }

  async componentDidMount() {
    const articles = await apiService.getRepositoriesByPage(this.props.query, this.props.page)
    this.setState({ articles })
  }

  getArticles() {
    if (this.state.articles.length) {
      return this.state.articles.map((art) => {
        const date = new Date(art['updated_at']).toLocaleString()
        return (
          <article key={art['id']}>
            <h3 className="repositoryTitle">
              <a href={"/" + art['full_name']}>{art['full_name']}</a>
            </h3>
            <small className="stars">{art['stargazers_count']}</small>
            <div className="updateDate">Updated: <i>{date}</i></div>
            <div className="githubUrl">Github url: <a href={art['html_url']}>{art['html_url']}</a></div>
          </article>
        )
      })
    }
  }

  renderArticles() {
    if (this.props.page === this.state.page && this.props.query === this.state.query) {
      try {
        return this.getArticles()
      } catch (e) {
        return <code>API rate limit exceeded for your IP. <br /> Wait a few seconds and restart the browser.</code>
      }
    } else {
      apiService.getRepositoriesByPage(this.props.query, this.props.page)
        .then(res => {
          this.setState({ query: this.props.query, page: this.props.page, articles: res })
        })
    }
  }

  render() {
    return (
      <section>
        {this.renderArticles()}
      </section>
    )
  }
}

export default Section