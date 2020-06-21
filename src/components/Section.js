import React from 'react'
import { apiService } from '../services/api.service'

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }

  async componentDidMount() {
    const articles = await apiService.getRepositoriesByPage(1)
    this.setState({articles})
  }

  getArticles() {
    if(this.state.articles.length) {
      return this.state.articles.map((art) => {
        const date = new Date(art['updated_at']).toLocaleString()
        return (
          <article key={art['id']}>
            <h3 className="repositoryTitle"><a href={"repos.html#" + art['full_name']}>{art['full_name']}</a></h3>
            <small className="stars">{art['stargazers_count']}</small>
            <div className="updateDate">Updated: <i>{date}</i></div>
            <div className="githubUrl">Github url: <a href={art['html_url']}>{art['html_url']}</a></div>
          </article>
        )
      })
    }
  }

  render() {
    return (
      <section>
        {this.getArticles()}
      </section>
    )
  }
}

export default Section