import React, { Component } from 'react'

 class Refs extends Component {
    constructor(props) {
      super(props)
       this.inputRef=React.createRef()
       this.CbRef=null
       this.setCbRef=(element)=>{
        this.CbRef=element
        this.clickHandler=this.clickHandler.bind(this)
       }
      this.state = {
         
      }
     
    }
    componentDidMount() {
      this.inputRef.current.focus()
      console.log(this.inputRef)
    }
    clickHandler=() =>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler } >click</button>
      </div>
    )
  }
}

export default Refs