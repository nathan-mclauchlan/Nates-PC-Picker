import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'

function App() {
  const [widgets, setWidgets] = useState([])
  //const [count, setCount] = useState(0)

  // useEffect(getWidgets(), [])

  useEffect(() => {
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map((widget) => <li key={widget.id}>{widget.name}</li>)}
      </ul>
    </div>
  )
}

export default App
