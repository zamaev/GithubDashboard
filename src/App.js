import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Section from './components/Section'
import Pagination from './components/Pagination'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handlePageChange = this.handlePageChange.bind(this)
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.state = {
      query: '',
      page: 1
    }
  }

  handlePageChange(page) {
    this.setState({page})
  }

  handleQueryChange(query) {
    this.setState({query})
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Search onQueryChange={this.handleQueryChange} query={this.state.query} />
        <Section page={this.state.page} query={this.state.query} />
        <Pagination page={this.state.page} onPageChange={this.handlePageChange} />
      </div>
    )
  }
}

export default App
