import React, { Component } from 'react'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'viki'
      }
      console.log('LifecycleB constructor')
    }
    static getDerivedStateFromProps(props,state){
      
        console.log('LifecycleB getDerivedStateFromprops')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidmount')
    }
    
    shouldComponentUpdate(){
        console.log('lifecycleB shouldComponentUpdate')
        return true
    }
    
    render(){
        console.log('LifecycleB render')
    return(
      <div>Lifecycle</div>
    )
  }
}

export default LifecycleA