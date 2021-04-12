import React, { useState, useEffect } from 'react'
import { getWidgets } from '../api'
import Widget from './Widget.jsx'

function App () {
  const [widgets, setWidgets] = useState([])

  useEffect(() => {
    return getWidgets().then((widgets) => {
      setWidgets(widgets)
      return null
    })
  }, [])

  return (
    <div>
      {widgets.map((widget) => (
        <Widget
          key={widget.id}
          mfg={widget.mfg}
          inStock={widget.inStock}
          name={widget.name}
        />
      )
      )}
    </div>
  )
}

export default App
