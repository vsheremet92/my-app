import React from 'react'
import classnames from 'classnames'

export class Item extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    editing: false
  }

  updateItem(ev) {
    console.log('save', this.props.onItemUpdate);
    this.props.onItemUpdate(this.props.id, ev.target.value);
  }


  render () {
    const { isActive, toggleItem, onItemUpdate, title, id } = this.props;
    const { editing } = this.state;

    return (
      <li className={isActive ? 'active' : 'removed'}>
          <button className={classnames('item-btn', {'item-btn-hide': editing})} onClick={(e)=> {
              this.setState({editing: true});
          }}>
            ✎
          </button>
          <button className={classnames('item-btn', {'item-btn-hide': !editing})} onClick={(e)=> {
              this.setState({editing: false});
          }}>
            ✕  
          </button>
          {
            !editing ?
            <span>{title}</span> :
            <input onKeyUp={(e)=> {
                if(e.keyCode === 13) {
                  this.updateItem(e);
                  this.setState({editing: false});
                }
              }} className="item-edit" autoFocus type="text" defaultValue={title} />
          }
          <button className="item-toggle" onClick={()=> toggleItem(id)}>⟳</button>
      </li>
    )

  }
}
