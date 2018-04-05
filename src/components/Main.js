import React, { Component } from 'react';
import Item from './Item'
class Main extends React.Component{
  // Passing down a function from App to Item component
  deleteItemII = (type,item) =>{
    this.props.handleDelete(type,item)
  }

  render(){
    const headers = ['NAME','PRICE','AMOUNT','TOTAL']
    return (
      <table className="cart-table" cellPadding="2px">

      <tbody>
      <tr>{headers.map((header)=><th key={header}>{header}</th>)}</tr>

      {this.props.items.map((item)=><Item key={item.id} data={item} deleteItem={this.deleteItemII}/>)}
      </tbody>
      </table>
    )
  }
}

export default Main;
