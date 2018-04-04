import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../App.css';

class App extends Component {
  state = {
    items:[],
    total: 0
  }
 getTotal = (items)=>{
   return items.reduce((acc,val)=>{
     return acc + val.total;
   },0)
 }
  handleItem = (type,item)=>{
    let items;
    let total;
      if(type === 'ADD'){
      items = [...this.state.items,item]
      total = this.getTotal(items)
      this.setState({items,total})
    }else if(type === 'REMOVE'){
      items = this.state.items.filter((it)=> it.id !== item.id)
      total = this.getTotal(items)
      this.setState({items,total})
    }
  }
  render() {
    return (
      <div className="container">
      <Header handleItem = {this.handleItem}/>
      <Main handleDelete={this.handleItem} items = {this.state.items}/>
      <Footer total = {this.state.total}/>
      </div>
    );
  }
}

export default App;
