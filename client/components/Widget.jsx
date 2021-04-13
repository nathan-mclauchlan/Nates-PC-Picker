import React, { useState } from 'react'
import { deleteWidget } from '../api'
import EditWidget from './EditWidget'

const Widget = (props) => {
  const { id, inStock, mfg, name, price } = props.widget
  const [isEditing, setIsEditing] = useState(false)

  const handleDelete = () => {
    deleteWidget(id)
    props.loadWidgets()
  }

  return (
    <>
      <div>
        {!isEditing &&
        <>
          <h3>{id} | ${price} for {name}</h3>
          <h4>{mfg} ({inStock} in stock)</h4>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => { setIsEditing(!isEditing) }}>Edit</button>
          <br/>
        </>
        }
        {isEditing &&
          <EditWidget widget={props.widget} setIsEditing={setIsEditing} loadWidgets={props.loadWidgets}/>
        }
      </div>
    </>
  )
}

export default Widget
