import React, { useEffect, useState } from 'react'
import { getWidgets } from '../api'
import { AddWidget } from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    loadWidgets()
  }, [])

  function loadWidgets () {
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
        return null
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <AddWidget afterSubmit={loadWidgets}/>
      <ul>
        {widgets.map((widget) => <li key={widget.id}>{widget.name}</li>)}
      </ul>
    </div>
  )
}

export default App
