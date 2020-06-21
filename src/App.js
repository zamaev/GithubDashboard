import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Section from './components/Section'
import Pagination from './components/Pagination'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query = '',
      page = 1
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Search />
        <Section />
        <Pagination />
      </div>
    )
  }
}

export default App
