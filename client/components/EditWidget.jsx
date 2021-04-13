import React, { useState } from 'react'
import { updateWidget } from '../api'

const EditWidget = (props) => {
  const { id, inStock, mfg, name, price, rating } = props.widget

  const ratings = [1, 2, 3, 4, 5]

  const [formData, setFormData] = useState({
    inStock, mfg, name, price, rating
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSave = (e) => {
    e.preventDefault()
    updateWidget(id, formData)
    props.setIsEditing(false)
    props.loadWidgets()
  }

  return (
    <>
      <form onSubmit={handleSave}>
        <label htmlFor="name">Name</label><input onChange={handleChange} type="text" name="name" value={formData.name} />
        <br/>
        <label htmlFor="price">Price</label><input onChange={handleChange} type="number" name="price" value={formData.price} />
        <br/>
        <label htmlFor="mfg">Manufacturer</label><input onChange={handleChange} type="text" name="mfg" value={formData.mfg} />
        <br/>
        <label htmlFor="inStock">In Stock</label><input onChange={handleChange} type="number" name="inStock" value={formData.inStock}/>
        <br/>
        <label htmlFor="rating">Rating</label>
        <br/>
        {ratings.map((rating) => (
          <>
            <label>{rating}</label>
            <input type="radio" onChange={handleChange} name="rating" value={rating}/>
            <br/>
          </>
        ))}
        <input type="submit" value="Save" />
        <br/>
      </form>
      <button onClick={() => {
        props.setIsEditing(false)
      }}>Cancel</button>
    </>
  )
}

export default EditWidget
