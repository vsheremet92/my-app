import React from 'react'
import classnames from 'classnames'

export class Item extends React.Component {

  constructor(props) {
    super(props);
  }

  state = {
    editing: false
  }

  save(ev) {
    console.log('save', this.props.onItemUpdate);
    this.props.onItemUpdate(this.props.id, ev.target.value);
  }


  render () {
    const { isActive, toggleItem, onItemUpdate, title, id } = this.props;
    const { editing } = this.state;

    return (
      <li className={isActive ? 'active' : 'removed'}>
          <button className="item-toggle" onClick={()=> toggleItem(id)}>X</button>
          {
            !editing ?
            <span>{title}</span> :
            <input onKeyUp={(e)=> {
                if(e.keyCode === 13) {
                  this.save(e);
                  this.setState({editing: false});
                }
              }} className="item-edit" autoFocus type="text" defaultValue={title} />
          }

          <button className={classnames('item-btn', {'item-btn-hide': editing})} onClick={(e)=> {
              this.setState({editing: true});
          }}>
            edit
          </button>
          <button className={classnames('item-btn', {'item-btn-hide': !editing})} onClick={(e)=> {
              this.setState({editing: false});
          }}>
              x
          </button>
      </li>
    )

  }
}
