import React, { useState } from 'react'
import { addWidget } from '../api'

const AddWidget = (props) => {
  const [formData, setFormData] = useState({
    name: '', mfg: '', price: 0, inStock: 0
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    addWidget(formData)
    e.preventDefault()
    props.loadWidgets()
  }

  return <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Widget Name</label>
      <input onChange={handleChange} type="text" name="name" value={formData.name}/><br/>
      <label htmlFor="mfg">Manufacturer</label>
      <input onChange={handleChange} type="text" name="mfg" value={formData.mfg}/><br />
      <label htmlFor="price">Price</label>
      <input onChange={handleChange} type="number" name="price" value={formData.price}/><br />
      <label htmlFor="inStock">In Stock</label>
      <input onChange={handleChange} type="number" name="inStock" value={formData.inStock}/><br />
      <input type="submit" value="Submit"/>
    </form>
  </div>
}

export default AddWidget
