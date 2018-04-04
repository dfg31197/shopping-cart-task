import React from 'react'


class Header extends React.Component{

  state={
    label:{
      name: '',
      price: '',
      amount: '',
    },
    allow: false
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
        if(this.state.label[key] === '')
        {
          bool = false
          break;
        }
        console.log(this.state.label[key])
      }
      this.setState({allow:bool})
    })

  }
  handleSubmit(){
    console.log("ye")
  }

  render(){
    const label = Object.keys(this.state.label)
    console.log(this.state)
    return (<div className="shopping-header">
    {label.map((lab)=><input key={lab} name={lab} type="text" value={this.state[lab]} onChange={(e)=>{this.handleChange(e,lab)}} />)}
    <button disabled={!this.state.allow} onClick={this.handleSubmit}> Add</button>
    </div>)
  }
}

export default Header
