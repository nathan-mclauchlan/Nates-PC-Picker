import React, {useState, useEffect} from 'react'
import { getWidgets, addWidgets, delWidget, updateWidget } from '../api'

const initialData = {
  name:'',
  price: '',
  mfg:'',
  inStock: ''
}

function App () {
  const [widgets, useWidgets] = useState([])
  const [formData, changeForm] = useState(initialData)
  
 
  useEffect(() => {
    loadWidgets()
  }, [])

  function handleChange (event) {
    changeForm({...formData, [event.target.name]: event.target.value})
  }

  function loadWidgets () {
    getWidgets()
      .then(widgets => {
        useWidgets(widgets)
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }
  
  function handleSubmit (event) {
    event.preventDefault()
    addWidgets(formData)
    .then(() => {
      changeForm(initialData)
    loadWidgets()
    return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  }

  function deleteWidget (id) {
    delWidget(id)
      .then(() => {
    loadWidgets()
    return null
    })
    .catch(err => {
      console.log('not working')
    })
  }

  return (
    <>
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
      {widgets.map((widget) => <li key={widget.id}>{widget.name} <button onClick={() => {deleteWidget(widget.id)}}>Delete</button></li>)}
      </ul>
    </div>
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='What is the widget name?'/>
        </div>
        <div>
          <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder='What is the price?'/>
        </div>
        <div>
          <input type="text" name="mfg" value={formData.mfg} onChange={handleChange} placeholder='Manufacturer'/>
        </div>
        <div>
          <input type="text" name="inStock" value={formData.inStock} onChange={handleChange} placeholder='How many are in stock?'/>
        </div>
        <input type="submit" value="save"/>
      </form>
    </div>
    </>
  )
}

export default App
