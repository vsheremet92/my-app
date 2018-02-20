import React from 'react'
import { addNewItem } from '../actions/index'
import { connect } from 'react-redux'
import { times } from '../constants/index'

class Add extends React.Component {

    state = {
      value: ''
    }

    createRandomItems = (x)=> {
      times(x)(()=> this.props.dispatch(addNewItem(String(Math.round(Math.random()*100) + 5))));
    }

    render() {
      return(
        <form className="add-item" onSubmit={(e)=> {
            e.preventDefault();
            this.state.value.trim() && this.props.dispatch(addNewItem(this.state.value));
            this.setState({value: ''});
          }}>
            Add item
            <br /><br />
            <input placeholder="Enter a title, hit ENTER" type="text" value={this.state.value} onChange={(e)=> {
                this.setState({ value: e.target.value });
              }}
            />
            <br /><br />
            <button>Add Item</button><br /><br />
            <div style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '14px' }} onClick={()=> {
                this.createRandomItems(25);
              }}>
              Create 25 random items
            </div>
            <hr />
        </form>
      )
    }
}

let AddItem = connect()(Add);

export default AddItem;
