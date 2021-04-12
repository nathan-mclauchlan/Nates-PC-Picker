import React, { useEffect, useState } from 'react'
import { getWidgets } from '../api'

function App () {
  const [widgets, setWidgets] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    getWidgets()
      .then(widgets => {
        setWidgets(widgets)
        return null
      })
  })

  console.log(widgets)
  return (
    <div>
      <h1>Widgets for the win!</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <ul>
        {widgets.map((widget) => <li key={widget.id}>{widget.name}</li>)}
      </ul>
    </div>
  )
}

export default App
