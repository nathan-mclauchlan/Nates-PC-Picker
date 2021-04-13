import React from 'react'
import { addWidget } from '../api'
import { useState } from 'react'

const AddWidget = (props) => {
  const initialFormData = {name: '', inStock: 0, mfg: '', price: 0}
  const [formData, setFormData] = useState(initialFormData)

  function handleChange (e) {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newFormData)
  }

  function handleSubmit (e) {
    e.preventDefault()
    addWidget(formData)
    props.loadWidgets()
  }

  return (
    <form>
      <label for='name'>Name:</label>
      <input name='name' value={formData.name} type='text' onChange={handleChange} /><br />
      <label for='inStock'>In Stock</label>
      <input name='inStock' value={formData.inStock} onChange={handleChange} type='number' /><br />
      <label for='mfg'>Manufacturing:</label>
      <input name='mfg' value={formData.mfg} onChange={handleChange} type='text' /><br />
      <label for='price' value={formData.price}>Price</label>
      <input name='price' type='text' onChange={handleChange} /><br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}
export default AddWidget
