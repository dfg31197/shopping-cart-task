import React, { Component } from 'react';

class Item extends React.Component{

  deleteLI(){
    const type = 'REMOVE'
    const item = this.props.data
    this.props.deleteItem(type,item)
  }

  render(){
    const {name,price,amount,total} = this.props.data
    return(
      <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{total}</td>
      <td className="item-remove" onClick={this.deleteLI.bind(this)}>X</td>
      </tr>
    )
  }
}

export default Item;
