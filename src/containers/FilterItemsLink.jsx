import { FilterLink } from '../components/FilterLink'
import { connect } from 'react-redux'
import { setFilter } from '../actions/index'

const mapStateToProps = (state, ownProps)=> ({
    active: ownProps.fltr === state.fltr
})

const mapDispatchToProps = (dispatch, ownProps)=> {
  return {
    onclick: ()=> dispatch(setFilter(ownProps.fltr))
  }
}

export const FilterItemsLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
