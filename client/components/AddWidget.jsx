import React, { useState } from 'react'
import { addWidgets } from '../api'

const initialData = {
  name: '',
  price: 0,
  mfg: '',
  inStock: 0
}

function AddWidget (props) {
  const [widgets, setWidgets] = useState(initialData)

  function handleSubmit (e) {
    e.preventDefault()
    addWidgets(widgets)
      .then(() => {
        setWidgets(initialData)
        if (props.afterSubmit) props.afterSubmit()
        return null
      })
      .catch(e => {
        console.log('unluggy')
      })
  }

  function handleChange (e) {
    const newFormData = {
      ...widgets,
      [e.target.name]: e.target.value
    }
    setWidgets(newFormData)
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <input type='text' name='name' value={widgets.name} onChange={handleChange} placeholder='Enter the widget NOW' />
    </div>
    <div>
      <input type='text' name='price' value={widgets.price} onChange={handleChange} placeholder='Price' />
    </div>
    <div>
      <input type='text' name='mfg' value={widgets.mfg} onChange={handleChange}
        placeholder='Manufacterer' />
    </div>
    <div>
      <input type='text' name='inStock' value={widgets.inStock} onChange={handleChange} placeholder='In stock' />
    </div>
    <input type='submit' value='Save' />
  </form>
}

export default AddWidget
