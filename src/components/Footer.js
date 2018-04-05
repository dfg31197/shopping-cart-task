import React from 'react'

class Footer extends React.Component{

  render(){
    return(
      <span>Total: {this.props.totalBill}</span>
    )
  }
}
export default Footer;
