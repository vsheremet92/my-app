import React from 'react'
import classnames from 'classnames'

export class Item extends React.Component {

  state = {
    editing: false
  }

  updateItem(ev) {
    this.props.onItemUpdate(this.props.id, ev.target.value);
  }


  render () {
    const { isActive, toggleItem, deleteItem, title, id } = this.props;
    const { editing } = this.state;

    return (
      <li className={classnames('item', isActive ? 'active' : 'inactive')}>
          <button className={classnames('item-edit', {'item-btn-hide': editing})} onClick={()=> {
              deleteItem(id)
            }}>
            ✕
          </button>
          <button className={classnames('item-edit', {'item-btn-hide': editing})} onClick={(e)=> {
              this.setState({editing: true});
          }}>
            ✎
          </button>
          <button className={classnames('item-edit', {'item-btn-hide': !editing})} onClick={(e)=> {
              this.setState({editing: false});
          }}>
            ✕
          </button>
          <button className={classnames('item-edit', {'item-btn-hide': editing})} onClick={()=> toggleItem(id)}>⟳</button>
          {
            !editing ?
            <div className="item-plot">
              <br />
              <p>Title: {title}</p>
              <p>ID: {id}</p>
            </div> :
            <input onKeyUp={(ev)=> {
                if(ev.keyCode === 13) {
                  this.updateItem(ev);
                  this.setState({editing: false});
                }
              }} className="item-editing" autoFocus type="text" defaultValue={title} />
          }
      </li>
    )

  }
}
