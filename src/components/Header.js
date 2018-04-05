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

  formValidator =(key,obj,prev)=>{
    const value = obj.label[key]

    // TODO: Remove redundancy
    const validations = {
      name: '^[a-zA-Z0-9]*$',
      price: '^[0-9]*$',
      amount: '^[0-9]*$'
    }
    const pattern = new RegExp(validations[key],'i')
    if(!pattern.test(value)){
      obj.label[key] = prev.label[key]
    }

    // TODO: Improve button toggle functionality
    obj.allow = true;
    const keys = Object.keys(obj.label)
    for(let that of keys){
      if(obj.label[that] === '' || obj.label[that] === 0){
        obj.allow = false
      }
    }
    return obj;
  }

  handleChange(e,type){
    const keys = Object.keys(this.state.label)
    const {value} = e.target
    const tempObj = {...this.state,label:{...this.state.label,[type]:value}}
    const resultObj = this.formValidator(type,tempObj,{...this.state})

    this.setState((prev)=>resultObj)

  }
  handleSubmit(){
    const {name,price,amount} = this.state.label
    const currentItemTotal = price*amount;
    const id = `${new Date().getTime()}`
    this.props.handleItem('ADD',{id,name,price,amount,currentItemTotal})
    this.setState({
      label:{
        name: '',
        price: '',
        amount: '',
      },
      allow: false,
    })
  }

  render(){
    const label = Object.keys(this.state.label)
    //console.log(this.state)
    return (<div className="shopping-header">
    {label.map((lab)=><input key={lab} name={lab} value={this.state.label[lab]} placeholder={lab} onChange={(e)=>{this.handleChange(e,lab)}} />)}
    <button disabled={!this.state.allow} onClick={(e)=>{this.handleSubmit(e)}}> Add</button>
    </div>)
  }
}

export default Header
