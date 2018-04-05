import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../App.css';

class App extends Component {
  state = {
    items:[],
    totalBill: 0
  }
 getTotal = (items)=>{
   return items.reduce((acc,val)=>{
     return acc + val.currentItemTotal;
   },0)
 }
  handleItem = (type,item)=>{
    let items;
    let totalBill;
      if(type === 'ADD'){
      items = [...this.state.items,item]
      totalBill = this.getTotal(items)
      this.setState({items,totalBill})
    }else if(type === 'REMOVE'){
      items = this.state.items.filter((it)=> it.id !== item.id)
      totalBill = this.getTotal(items)
      this.setState({items,totalBill})
    }
  }
  render() {
    return (
      <div className="container">
      <Header handleItem = {this.handleItem}/>
      <Main handleDelete={this.handleItem} items = {this.state.items}/>
      <Footer totalBill = {this.state.totalBill}/>
      </div>
    );
  }
}

export default App;
