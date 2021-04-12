import React from 'react'

function Widget (props) {
  return (
    <li key={props.myWidget.id}>{props.myWidget.name}</li>
  )
}




export default Widget