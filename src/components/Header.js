import React from 'react'

const INIT_STATE = {
  label:{
    name: {
      inputVal:'',
      valid: false
    },
    price: {
      inputVal:'',
      valid: false
    },
    amount: {
      inputVal:'',
      valid: false
    },
  },
  filled:0,
  allow: false,
}

class Header extends React.Component{

  state = {...INIT_STATE}
LABEL_KEYS = Object.keys(this.state.label)

  formValidator =(key,obj,prev)=>{
    const value = obj.label[key].inputVal

    // TODO: Remove redundancy
    const validations = {
      name: '^[a-zA-Z0-9]*$',
      price: '^[0-9]*$',
      amount: '^[0-9]*$'
    }
    const pattern = new RegExp(validations[key],'i')
    if(!pattern.test(value)){
      obj.label[key].inputVal = prev.label[key].inputVal
    }
    console.log(obj.label[key].inputVal)
    if(obj.label[key].inputVal !== '' && obj.label[key].inputVal !== 0){
      if(obj.label[key].valid === false){
        obj.label[key].valid = true
        obj.filled += 1;
      }
    }else{
      if(obj.label[key].valid === true){
        obj.label[key].valid = false;
        obj.filled -=1;
      }
    }
    // TODO: Improve button toggle functionality

    return obj;
  }

  handleChange(e,type){
    const {value} = e.target
    const tempObj = {
      ...this.state,
      label:{
        ...this.state.label,
        [type]:{
            inputVal: value,
            valid: this.state.label[type].valid
        }
      }
    }
    const resultObj = this.formValidator(type,tempObj,{...this.state})

    this.setState((prev)=>resultObj)

  }

  checkAndToggleButton=(e)=>{
    // Least terrible solution?
    this.setState((prev)=>({allow:prev.filled === this.LABEL_KEYS.length}))
  }

  handleSubmit(){
    const {name,price,amount} = this.state.label
    const currentItemTotal = price.inputVal*amount.inputVal;
    const id = `${new Date().getTime()}`
    this.props.handleItem('ADD',{id,name:name.inputVal,price:price.inputVal,amount:amount.inputVal,currentItemTotal})
    this.setState({...INIT_STATE})
  }

  render(){
    return (<div className="shopping-header">
    {this.LABEL_KEYS.map((lab)=><input key={lab} name={lab} value={this.state.label[lab].inputVal} placeholder={lab} onMouseOut={(e)=>{this.checkAndToggleButton()}} onBlur={(e)=>{this.checkAndToggleButton()}} onChange={(e)=>{this.handleChange(e,lab)}} />)}
    <button disabled={!this.state.allow} onClick={(e)=>{this.handleSubmit(e)}}> Add</button>
    </div>)
  }
}

export default Header
