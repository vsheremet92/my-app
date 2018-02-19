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
        <form className="add-item" onSubmit={(e)=> {
            e.preventDefault();
            this.state.value.trim() && this.props.dispatch(addNewItem(this.state.value));
            this.setState({value: ''});
            console.log(store.getState());
          }}>
            Add item
            <br /><br />
            <input placeholder="Enter a title, hit ENTER" type="text" value={this.state.value} onChange={(e)=> {
                this.setState({ value: e.target.value });
              }}
            />
            <br /><br />
            <button>Add Item</button>
            <hr />
        </form>
      )
    }
}

let AddItem = connect()(Add);

export default AddItem;
