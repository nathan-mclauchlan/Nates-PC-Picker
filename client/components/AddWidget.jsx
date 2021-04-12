import React from 'react'
import { addWidget } from '../api'
import { useState } from 'react'

const AddWidget = () => {

    const initialFormData = {name: '', inStock: 0, mfg: '', price: 0}

  function handleSubmit (e) {
    e.preventDefault()
    console.log(e)
}
  return (
    <form>
      <label for='name'>Name:</label>
      <input name='name' type='text' /><br />
      <label for='inStock'>In Stock</label>
      <input name='inStock' type='number' /><br />
      <label for='mfg'>Manufacturing:</label>
      <input name='name' type='text' /><br />
      <label for='price'>Price</label>
      <input name='price' type='text' /><br />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}
export default AddWidget