import React, { Component } from 'react';

class Item extends React.Component{

  deleteLI(){
    const type = 'REMOVE'
    const item = this.props.data
    this.props.deleteItem(type,item)
  }

  render(){
    const {name,price,amount,currentItemTotal} = this.props.data
    return(
      <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{amount}</td>
      <td>{currentItemTotal}</td>
      <td className="item-remove" onClick={(arg)=>{this.deleteLI(arg)}}>X</td>
      </tr>
    )
  }
}

export default Item;
