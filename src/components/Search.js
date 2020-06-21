import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input className="search" type="text" name="search" placeholder="Search repository..."></input>
    )
  }
}

export default Search