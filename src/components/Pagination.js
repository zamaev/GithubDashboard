import React from 'react'

class Pagination extends React.Component {
  constructor(props) {
    super(props)
    this.state = {page: 1}
    this.changePage = this.changePage.bind(this)
  }

  changePage(e) {
    if(e.target.id) {
      this.setState({page: e.target.id})
    }
  }

  getPageLists() {
    let pages = [];
    for (let i = 1; i <= 10; i++) {
      if (i == this.state.page) {
      pages.push(<a id={i} key={i} href={"#"+i} className="active">{i}</a>) 
      } else {
      pages.push(<a id={i} key={i} href={"#"+i}>{i}</a>)
      }
    }
    return pages
  }

  render() {
    return (
      <div className="pagination" onClick={this.changePage}>
        {this.getPageLists()}
      </div>
    )
  }
}

export default Pagination