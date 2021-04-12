import React from 'react'

const Widgets = (props) => {
  return <div>
    {props.widgets.map((widget, i) => <li key={i}>Name: {widget.name}, In Stock: {widget.inStock}, Manufacturing: {widget.mfg}, Price: {widget.price}</li>)}
  </div>
}
export default Widgets
