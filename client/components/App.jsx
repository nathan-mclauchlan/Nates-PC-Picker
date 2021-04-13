import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget'
import AddWidget from './AddWidget'

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
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <AddWidget afterSubmit={loadWidgets} />
      <Widget />
    </div>
  )
}

export default App
