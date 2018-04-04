import React, { Component } from 'react';

class Item extends React.Component{


  render(){
    return(
      <span>{this.props.data.name}</span>
    )
  }
}

export default Item;
