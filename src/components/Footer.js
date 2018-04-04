import React from 'react'

class Footer extends React.Component{

  render(){
    return(
      <h2>Total: {this.props.total}</h2>
    )
  }
}
export default Footer;
