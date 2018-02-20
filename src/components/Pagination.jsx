import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/index'

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination-container">
          {this.props.children}
          <ul className="pagination-list">
            {
              this.props.pages.length > 1 &&
              this.props.pages.map((i)=> {
                return (
                  <li key={i+1} onClick={()=> this.props.onClick(i+1)}>{i+1}</li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    pages: [0,1,2,3,4]
  }
}

const mapDispatchToProps = {
  onClick: setActivePage
}

const ItemPagination = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)

export default ItemPagination
