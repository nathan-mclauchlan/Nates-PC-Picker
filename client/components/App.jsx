import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import { addWidget } from '../api'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    // console.log('using the effect')
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
      })
  }, [])

  function saveWidget () {
    console.log('Are you happy?')
    const newWidget = {name: 'Mappy', price: 10, mfg: 'Map', inStock: 2}
    addWidget(newWidget)
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>

        <ul>
          {widgets.map((widget) => <li key={widget.id}>{widget.name}</li>)}
        </ul>

        <form>
         <button onClick={saveWidget}>Save</button>
        </form>
    </div>
  )
}

export default App
