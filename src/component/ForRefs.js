import React from 'react'

// function ForRefs() {
//   return (
//     <div>
//       <input type='text'/>
//     </div>
//   )
// }

const ForRefs=React.forwardRef((props,ref)=>{
  return (
    <div>
      <input type='text' ref={ref}/>
    </div>
  )

})






export default ForRefs