import React, { Component } from 'react';
import Item from './Item'
class Main extends React.Component{
  deleteItemYo = (type,item) =>{
    this.props.handleDelete(type,item)
  }
  render(){
    const headers = "NAME PRICE AMOUNT TOTAL".split(" ")
    return (
      <table className="cart-table" cellPadding="2px">

      <tbody>
      <tr>{headers.map((header)=><th key={header}>{header}</th>)}</tr>

      {this.props.items.map((item)=><Item key={item.id} data={item} deleteItem={this.deleteItemYo}/>)}
      </tbody>
      </table>
    )
  }
}

export default Main;
