import React from 'react'
import { deleteWidget } from '../api'

const Widget = (props) => {
  const { id, inStock, mfg, name, price } = props.widget

  const handleDelete = () => {
    deleteWidget(id)
    props.loadWidgets()
  }
  return (
    <>
      <div>
        <h3>${price} for {name}</h3>
        <h4>{mfg} ({inStock} in stock)</h4>
        <button onClick={handleDelete}>Delete</button>
        <br/>
      </div>
    </>
  )
}

export default Widget
