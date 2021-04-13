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
      <label htmlFor="name">Widget Name</label><br/>
      <input onChange={handleChange} type="text" name="name"/><br/>
      <label htmlFor="mfg">Manufacturer</label><br/>
      <input onChange={handleChange} type="text" name="mfg"/><br />
      <label htmlFor="price">Price</label><br/>
      <input onChange={handleChange} type="number" name="price"/><br />
      <label htmlFor="inStock">In Stock</label><br/>
      <input onChange={handleChange} type="number" name="inStock"/><br />
      <input type="submit" value="Submit"/>
    </form>
  </div>
}

export default AddWidget
