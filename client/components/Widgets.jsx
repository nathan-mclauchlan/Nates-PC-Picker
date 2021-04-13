import React from 'react'
import { deleteWidget } from '../api'

const Widgets = (props) => {
  function handleDelete (id) {
    deleteWidget(id)
    props.loadWidgets()
  }
  return <>
    {props.widgets.map((widget, i) => <div>
      <li key={i}>Name: {widget.name}, In Stock: {widget.inStock}, Manufacturing: {widget.mfg}, Price: {widget.price}</li> 
      <button onClick={() => handleDelete(widget.id)}>DELETE</button>
    </div>)}
  </>
}
export default Widgets
