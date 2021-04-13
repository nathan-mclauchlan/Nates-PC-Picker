import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget.jsx'
import AddWidget from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])
  const [showForm, setShowForm] = useState(false)

  const loadWidgets = () => {
    return getWidgets().then((widgets) => {
      setWidgets(widgets)
      return null
    })
  }

  useEffect(() => {
    loadWidgets()
  }, [])

  return (
    <div>
      {widgets.map((widget) => (
        <Widget
          key={widget.id}
          widget={widget}
        />
      )
      )}
      <button onClick={() => { setShowForm(!showForm) }}>Show/Hide Add Widget Form</button>
      {showForm &&
        <AddWidget loadWidgets={loadWidgets}/>
      }

    </div>
  )
}

export default App
