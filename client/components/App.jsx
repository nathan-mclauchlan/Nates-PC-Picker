import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    // console.log('using the effect')
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
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
