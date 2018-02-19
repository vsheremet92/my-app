import { FilterDate } from '../components/FilterDate'
import { connect } from 'react-redux'
import { filterByDate } from '../actions/index'

const mapStateToProps = (state)=> ({
  dates: state.items.map(item=> item.createdAt).filter((date, index, arr)=> {return arr.indexOf(date) === index})
});

const mapDispatchToProps = {
  onSelect: filterByDate
}

export const FilterByDate = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterDate);
