import React, { useState } from 'react'

import { saveWidget } from '../api'

const initialData = {
  name: '',
  price: 0,
  mfg: '',
  inStock: 0
}

// create the form
// hijack the handleSubmit
// create the state with initial Data
// bind event to onChange for each input
// onChange update the state

export function AddWidget (props) {
  const [formData, setFormData] = useState(initialData)

  function handleSubmit (e) {
    e.preventDefault()
    saveWidget(formData)
      .then(() => {
        setFormData(initialData)
        if (props.afterSubmit) props.afterSubmit()
        return null
      })
      .catch(e => {
        console.log('sadness')
      })
  }

  function handleChange (e) {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    }
    // console.log(formData, newFormData)
    setFormData(newFormData)
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='What is the widget name'/>
    </div>
    <div>
      <input type='text' name='price' value={formData.price} onChange={handleChange} placeholder='price is your name'/>
    </div>
    <div>
      <input type='text' name='mfg' value={formData.mfg} onChange={handleChange} placeholder='Manufacturer'/>
    </div>
    <div>
      <input type='text' name='inStock' value={formData.inStock} onChange={handleChange} placeholder='How many are in stock'/>
    </div>
    <input type='submit' value='Save' />
  </form>
}
