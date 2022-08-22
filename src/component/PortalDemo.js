import React from 'react'
import ReactDOM  from 'react'

function PortalDemo() {
  return ReactDOM.createportal(
    <h1>PortalDemo</h1>, 
    document.getElementById('portal-root')
  )
}
 
export default PortalDemo