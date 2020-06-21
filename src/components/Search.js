import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.changeQuery = this.changeQuery.bind(this)
  }

  changeQuery(e) {
    this.props.onQueryChange(e.target.value)
  }

  render() {
    return (
      <input onChange={this.changeQuery} value={this.props.query} className="search" type="text" name="search" placeholder="Search repository..."></input>
    )
  }
}

export default Search