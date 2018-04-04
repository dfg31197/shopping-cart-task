import React from 'react'


class Header extends React.Component{

  state={
    label:{
      name: '',
      price: '',
      amount: '',
    },
    allow: false,
  }

  handleChange(e,type){
    const keys = Object.keys(this.state.label)
    const {value} = e.target
    this.setState((prev)=>{
      return {
        ...prev,
        label:{
          ...prev.label,
          [type]: value
        }
      }

    },()=>{
      let bool = true;
      for(let key of keys){
        if(this.state.label[key] === '' || this.state.label[key] === 0)
        {
          bool = false
          break;
        }
        //console.log(this.state.label[key])
      }
      this.setState({allow:bool})
    })

  }
  handleSubmit(){
    const {name,price,amount} = this.state.label
    const total = price*amount;
    const id = `${new Date().getTime()}`
    this.props.handleItem('ADD',{id,name,price,amount,total})
    this.setState({
      label:{
        name: '',
        price: '',
        amount: '',
      },
      allow: false,
    },()=>{console.log(this.state)})
  }

  render(){
    const label = Object.keys(this.state.label)
    //console.log(this.state)
    return (<div className="shopping-header">
    {label.map((lab)=><input key={lab} name={lab} type={lab === "price" || lab === "amount"?'number':'text'} value={this.state.label[lab]} onChange={(e)=>{this.handleChange(e,lab)}} />)}
    <button disabled={!this.state.allow} onClick={this.handleSubmit.bind(this)}> Add</button>
    </div>)
  }
}

export default Header
