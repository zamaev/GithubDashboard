import React from 'react'

class Repos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <h3><b>Repository name</b>: {this.props.reposName}</h3>
      <a href="/">home</a>
    </div>
    )
  }
}

export default Repos