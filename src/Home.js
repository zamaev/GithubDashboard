import React from 'react'
import Search from './components/Search'
import Section from './components/Section'
import Pagination from './components/Pagination'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.state = {
      query: this.getStateValueByIndex(0),
      page: this.getStateValueByIndex(1)
    }
  }

  getStateValueByIndex(i) {
    if (i) {
      localStorage.getItem('page') || localStorage.setItem('page', '1')
      return localStorage.getItem('page')
    } else {
      localStorage.getItem('query') || localStorage.setItem('query', '')
      return localStorage.getItem('query')
    }
  }

  handlePageChange(page) {
    localStorage.setItem('page', page)
    this.setState({ page })
  }

  handleQueryChange(query) {
    localStorage.setItem('query', query)
    this.setState({ query })
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1>Github Dashboard</h1>
        </header>
        <Search onQueryChange={this.handleQueryChange} query={this.state.query} />
        <Section page={this.state.page} query={this.state.query} />
        <Pagination page={this.state.page} onPageChange={this.handlePageChange} />
      </div>
    )
  }
}

export default Home
