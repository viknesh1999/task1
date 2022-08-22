import React, { Component } from 'react'
import LifecycleA from './LifeCycleA'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name:'viki'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props,state){
      
        console.log('LifecycleA getDerivedStateFromprops')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidmount')
    }
    
    shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    
    render(){
        console.log('LifecycleA render')
    return(
      <div>
       <div> LifecycleA</div>
       <LifecycleA />

      </div>
    )
  }
}

export default LifecycleB