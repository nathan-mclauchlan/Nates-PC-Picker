import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget.jsx'
import AddWidget from './AddWidget'

function App () {
  const [widgets, setWidgets] = useState([])
  const [count, setCount] = useState(0)
  const [showForm, setShowForm] = useState(false)


  useEffect(() => {
    return getWidgets().then((widgets) => {
      setWidgets(widgets)
      return null
    })
  }, [count])

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
        <AddWidget count={count} setCount={setCount}/>
      }

    </div>
  )
}

export default App
