import React from 'react'
import { connect } from 'react-redux'
import { setActivePage } from '../actions/index'
import { times } from '../constants/index'
import classnames from 'classnames'

class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination-container">
          <ul className="pagination-list">
            {
              this.props.pages.length > 1 &&
              this.props.pages.map((i)=> {
                return (
                  <li className={classnames('page', {'page-active': this.props.activePage===i+1})} key={i+1} onClick={()=> this.props.onClick(i+1)}>{i+1}</li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=> {
  let arr = [];
  for (let i=0; i<Math.ceil(ownProps.items.length/20); i++) {
    arr.push(i);
  }
  return {
    pages: arr
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
