import React, { Component } from 'react'
import ForRefs from './ForRefs'

class Forparent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        
        <ForRefs ref= {this.inputRef }/>
        <button onClick={this.clickHandler}>Focus Input</button>

      </div>
    )
  }
}

export default Forparent