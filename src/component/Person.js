import React from 'react'

function Person({Person}) {
  return (
    <div>
        <h2>I am{Person.name} years old, I know{Person.age}skill,I am{Person.skill}.</h2>
    </div>
  )
}

export default Person