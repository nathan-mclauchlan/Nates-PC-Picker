import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'

function App() {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    return getWidgets().then((widgets) => {
      console.log(widgets)
      return null
    })
  }, [])

  return (
    <div>
      <h1>Widgets for the win!</h1>
    </div>
  )
}

export default App
