import React, {useState, useEffect} from 'react'
import { getWidgets, addWidgets } from '../api'

function App () {
  const [widgets, useWidgets] = useState([])
  const [formData, changeForm] = useState({})
  const clearForm = {}
  useEffect(() => {
    getWidgets()
      .then(widgets => {
        console.log(widgets)
        useWidgets(widgets)
        return null 
      })
  }, [])

  function handleChange (event) {
    changeForm({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit () {
    addWidgets(formData)
    .then(() => {
      changeForm(clearForm)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  }


  return (
    <>
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
      {widgets.map((widget) => <li key={widget.id}>{widget.name}</li>)}
      </ul>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" onChange={handleChange}/>
        <label>Price: </label>
        <input type="text" name="price" onChange={handleChange}/>
        <label>mfg: </label>
        <input type="text" name="mfg" onChange={handleChange}/>
        <label>inStock: </label>
        <input type="text" name="inStock" onChange={handleChange}/>
        <button type="submit">Add Widget</button>
      </form>
    </div>
    </>
  )
}

export default App
