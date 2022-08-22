import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:''
      }
    }
    handleusernamechange=(event) =>{
     this.setState({
        username:event.target.value
     })
    }
  render() {
    return (
       <form>
      <div>
        <label>username</label>
        <input type="text" value={this.state.username} onChange={this.handleusernamechange} />
      </div>
      </form>
    )
  }
}

export default Form