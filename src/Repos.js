import React from 'react'
import { apiService } from './services/api.service'

class Repos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  async componentDidMount() {
    try {
      const repos = await apiService.getRepositoryByName(this.props.reposName)
      this.setState({ repos })
    } catch (e) {
      console.error(e)
    }
  }

  getLanguages() {
    let langs = []
    for (let key in this.state.repos.languages) {
      langs.push(<li key={key}> {this.state.repos.languages[key]} </li>)
    }
    return langs
  }

  getContributors() {
    let contrs = []
    for (let key in this.state.repos.contributors) {
      const user = this.state.repos.contributors[key]
      contrs.push(<li key={key}><a href={user.userUrl}><img alt={user.login} title={user.login} src={user.avatar} /></a></li>)
    }
    return contrs
  }


  getRepos() {
    return (
      <section>
        <article>
          <a id="goHome" href="/"> </a>
          <h2 className="repositoryTitle">{this.state.repos.name}</h2>
          <small className="stars">{this.state.repos.stars}</small>
          <small className="updateDate">Updated: {this.state.repos.updateDate}</small>

          <div className="user">
            <img className="logoUser" src={this.state.repos.userAvatar} alt={this.state.repos.user} />
            <a className="userUrl" href="https://github.com/facebook">{this.state.repos.user}</a>
          </div>

          <div className="langs">Languages:</div>
          <ul className="langList">
            {this.getLanguages()}
          </ul>

          <div className="about">About:</div>
          <p className="aboutText">{this.state.repos.about}s</p>

          <div className="contrs">Contributors:</div>
          <ul className="contrsList">
            {this.getContributors()}
          </ul>
        </article>
      </section>
    )
  }

  renderRepos() {
    try {
      return this.getRepos()
    } catch (e) {
      return <code>API rate limit exceeded for your IP. <br /> Wait a few seconds and restart the browser.</code>
    }
  }

  render() {
    return (
      <div id="repos">
        <header>
          <h1>Github Dashboard</h1>
        </header>
        {this.renderRepos()}
      </div>
    )
  }
}

export default Repos