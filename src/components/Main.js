import React, { Component } from 'react';
import Item from './Item'
class Main extends React.Component{

  render(){
    return (
      <ul>
      {this.props.items.map((item)=><li key={`LI${item.id}`}><Item key={item.id} data={item}/></li>)}
      </ul>
    )
  }
}

export default Main;
