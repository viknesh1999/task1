import React from 'react'

function NameList() {
    const persons=[
        {
            id:1,
            name:'Viki',
            age:20,
            skill:'Html'
        },
        {
            id:2,
            name:'Raj', 
            age:20,
            skill:'Css'
        },
        {
            id:3,
            name:'Vino',
            age:20,
            skill:'Js'
        }
    ]
    const personList= persons.map(Person =><Person key={Person.name} person={Person} /> ) 
  return (<div>{personList}</div>
  )
}

export default NameList 