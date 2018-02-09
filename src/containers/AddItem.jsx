import React from 'react'
import { addNewItem } from '../actions/index'
import { connect } from 'react-redux'
import { store } from '../index'

class Add extends React.Component {

    state = {
      value: ''
    }

    render() {
      return(
        <div>
            <br />
            <input placeholder="Enter a title of new item" type="text" value={this.state.value} onChange={(e)=> {
                this.setState({ value: e.target.value });
              }}
            />
            <br /><br />
            <button onClick={()=> {
              this.state.value && this.props.dispatch(addNewItem(this.state.value));
              this.setState({value: ''});
              console.log(store.getState());
            }}>
              Add Item
            </button>
        </div>
      )
    }
}

let AddItem = connect()(Add);

export default AddItem;
